import Update from "./types/update.ts";
import Message, { MessageEntity } from "./types/message.ts";
import TelegramResponse, { Result } from "./types/response.ts";
import TelegramError from "./error.ts";
import User from "./types/user.ts";
import {
  ForceReply,
  InlineKeyboardMarkup,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
} from "./types/reply.ts";

interface GetUpdateParameters {
  offset?: number;
  limit?: number;
  timeout?: number;
  allowed_updates?: (keyof Update)[];
}

type ReplyMarkup =
  | InlineKeyboardMarkup
  | ReplyKeyboardMarkup
  | ReplyKeyboardRemove
  | ForceReply;

interface SendMessageParameters {
  chat_id: number | string;
  message_thread_id?: number;
  text?: string;
  parse_mode?: string;
  entities?: MessageEntity[];
  disable_web_page_preview?: boolean;
  disable_notification?: boolean;
  protect_content?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?: ReplyMarkup;
}

interface SendVideoParameters {
  chat_id: number;
  message_thread_id?: number;
  video: Blob | string;
  duration?: number;
  width?: number;
  height?: number;
  thumb?: Blob | string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  has_spoiler?: boolean;
  supports_streaming?: boolean;
  disable_notification?: boolean;
  protect_content?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?: ReplyMarkup;
}

type Parameters =
  | GetUpdateParameters
  | SendMessageParameters
  | SendVideoParameters;

export default class TelegramBot {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  static async #parseResponse(httpResponse: globalThis.Response) {
    const response = await httpResponse.json() as TelegramResponse;

    if (!response.ok) {
      throw new TelegramError(
        response.description as string,
        response.error_code as number,
        response.parameters,
      );
    }

    return response.result as Result;
  }

  async #get(method: string, parameters: Parameters = {}) {
    const url = new URL(`https://api.telegram.org/bot${this.token}/${method}`);
    const urlSearchParams = new URLSearchParams(
      parameters as Record<string, string>,
    );
    url.search = urlSearchParams.toString();

    return TelegramBot.#parseResponse(await fetch(url));
  }

  async #post(method: string, body: string | FormData) {
    const httpResponse = await fetch(
      `https://api.telegram.org/bot${this.token}/${method}`,
      {
        method: "POST",
        headers: typeof body === "string"
          ? { "Content-Type": "application/json" }
          : undefined,
        body,
      },
    );

    return TelegramBot.#parseResponse(httpResponse);
  }

  getUpdates(parameters: GetUpdateParameters) {
    return this.#get("getUpdates", parameters) as Promise<Update[]>;
  }

  getMe() {
    return this.#get("getMe") as Promise<User>;
  }

  sendMessage(parameters: SendMessageParameters) {
    return this.#post(
      "sendMessage",
      JSON.stringify(parameters),
    ) as Promise<Message>;
  }

  sendVideo(parameters: SendVideoParameters) {
    let body: string | FormData;

    if (
      typeof parameters.video !== "string" ||
      typeof parameters.thumb !== "string"
    ) {
      body = new FormData();

      for (const [key, value] of Object.entries(parameters)) {
        body.set(key, value);
      }
    } else {
      body = JSON.stringify(parameters);
    }

    return this.#post("sendVideo", body) as Promise<Message>;
  }
}
