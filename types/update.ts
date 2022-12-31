import Message from "./message.ts";
import { Poll, PollAnswer } from "./poll.ts";

type InlineQuery = Record<string, unknown>;

type ChosenInlineResult = Record<string, unknown>;

type CallBackQuery = Record<string, unknown>;

type ShippingQuery = Record<string, unknown>;

type PreCheckoutQuery = Record<string, unknown>;

type ChatMemberUpdated = Record<string, unknown>;

type ChatJoinRequest = Record<string, unknown>;

export default interface Update {
  update_id: number;
  message?: Message;
  edited_message?: Message;
  channel_post?: Message;
  edited_channel_post?: Message;
  inline_query?: InlineQuery;
  chosen_inline_result?: ChosenInlineResult;
  callback_query?: CallBackQuery;
  shipping_query?: ShippingQuery;
  pre_checkout_query?: PreCheckoutQuery;
  poll?: Poll;
  poll_answer?: PollAnswer;
  my_chat_member?: ChatMemberUpdated;
  chat_member?: ChatMemberUpdated;
  chat_join_request?: ChatJoinRequest;
}
