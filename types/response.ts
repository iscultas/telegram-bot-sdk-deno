import Update from "./update.ts";
import User from "./user.ts";
import Message from "./message.ts";

export type Result = Update[] | User | Message;

export interface ResponseParameters {
  migrate_to_chat_id?: number;
  retry_after?: number;
}

export default interface TelegramResponse {
  ok: boolean;
  description?: string;
  result?: Result;
  error_code?: number;
  parameters?: ResponseParameters;
}
