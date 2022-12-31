import Chat from "./chat.ts";
import User from "./user.ts";
import { Poll } from "./poll.ts";
import { InlineKeyboardMarkup } from "./reply.ts";

type ChatInMessage = Pick<
  Chat,
  | "id"
  | "type"
  | "title"
  | "username"
  | "first_name"
  | "last_name"
  | "is_forum"
>;

type MessageEntityType =
  | "mention"
  | "hashtag"
  | "cashtag"
  | "bot_command"
  | "url"
  | "email"
  | "phone_number"
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "spoiler"
  | "code"
  | "pre"
  | "text_link"
  | "text_mention"
  | "custom_emoji";

export interface MessageEntity {
  type: MessageEntityType;
  offset: number;
  length: number;
  url?: string;
  user?: User;
  language?: string;
  custom_emoji_id?: string;
}

type Animation = Record<string, unknown>;

type Audio = Record<string, unknown>;

type Document = Record<string, unknown>;

type PhotoSize = Record<string, unknown>;

type Sticker = Record<string, unknown>;

type Video = Record<string, unknown>;

type VideoNote = Record<string, unknown>;

type Voice = Record<string, unknown>;

type Contact = Record<string, unknown>;

type Dice = Record<string, unknown>;

type Game = Record<string, unknown>;

type Venue = Record<string, unknown>;

type Location = Record<string, unknown>;

type MessageAutoDeleteTimerChanged = Record<string, unknown>;

type Invoice = Record<string, unknown>;

type SuccessfulPayment = Record<string, unknown>;

type WriteAccessAllowed = Record<string, unknown>;

type PassportData = Record<string, unknown>;

type ProximityAlertTriggered = Record<string, unknown>;

type ForumTopicCreated = Record<string, unknown>;

type ForumTopicEdited = Record<string, unknown>;

type ForumTopicClosed = Record<string, unknown>;

type ForumTopicReopened = Record<string, unknown>;

type GeneralForumTopicHidden = Record<string, unknown>;

type GeneralForumTopicUnhidden = Record<string, unknown>;

type VideoChatScheduled = Record<string, unknown>;

type VideoChatStarted = Record<string, unknown>;

type VideoChatEnded = Record<string, unknown>;

type VideoChatParticipantsInvited = Record<string, unknown>;

type WebAppData = Record<string, unknown>;

export default interface Message {
  message_id: number;
  message_thread_id?: number;
  from?: User;
  sender_chat?: Chat;
  date: number;
  chat: ChatInMessage;
  forward_from?: User;
  forward_from_chat?: Chat;
  forward_from_message_id?: number;
  forward_signature?: string;
  forward_sender_name?: string;
  forward_date?: number;
  is_topic_message?: boolean;
  is_automatic_forward?: boolean;
  reply_to_message?: Message;
  via_bot?: boolean;
  edit_date?: number;
  has_protected_content?: boolean;
  media_group_id?: string;
  author_signature?: string;
  text?: string;
  entities?: MessageEntity[];
  animation?: Animation;
  audio?: Audio;
  document?: Document;
  photo?: PhotoSize[];
  sticker?: Sticker;
  video?: Video;
  video_note?: VideoNote;
  voice?: Voice;
  caption?: string;
  caption_entities?: MessageEntity[];
  has_media_spoiler?: true;
  contact?: Contact;
  dice?: Dice;
  game?: Game;
  poll?: Poll;
  venue?: Venue;
  location?: Location;
  new_chat_members?: User[];
  left_chat_member?: User;
  new_chat_title?: string;
  new_chat_photo?: PhotoSize[];
  delete_chat_photo: boolean;
  group_chat_created?: boolean;
  supergroup_chat_created?: boolean;
  channel_chat_created?: boolean;
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
  migrate_to_chat_id?: number;
  migrate_from_chat_id?: number;
  pinned_message?: Message;
  invoice?: Invoice;
  successful_payment?: SuccessfulPayment;
  connected_website?: string;
  write_access_allowed?: WriteAccessAllowed;
  passport_data?: PassportData;
  proximity_alert_triggered?: ProximityAlertTriggered;
  forum_topic_created?: ForumTopicCreated;
  forum_topic_edited?: ForumTopicEdited;
  forum_topic_closed?: ForumTopicClosed;
  forum_topic_reopened?: ForumTopicReopened;
  general_forum_topic_hidden?: GeneralForumTopicHidden;
  general_forum_topic_unhidden?: GeneralForumTopicUnhidden;
  video_chat_scheduled?: VideoChatScheduled;
  video_chat_started?: VideoChatStarted;
  video_chat_ended?: VideoChatEnded;
  video_chat_participants_invited?: VideoChatParticipantsInvited;
  web_app_data?: WebAppData;
  reply_markup?: InlineKeyboardMarkup;
}
