import Message from "./message.ts";

type ChatPhoto = Record<string, unknown>;

type ChatPermissions = Record<string, unknown>;

type ChatLocation = Record<string, unknown>;

export default interface Chat {
  id: number;
  type: "private" | "group" | "supergroup" | "channel";
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  is_forum?: boolean;
  photo?: ChatPhoto;
  active_usernames?: string[];
  emoji_status_custom_emoji_id?: string;
  bio?: string;
  has_private_forwards?: boolean;
  has_restricted_voice_and_video_messages?: boolean;
  join_to_send_messages?: boolean;
  join_by_request?: boolean;
  description?: string;
  invite_link?: string;
  pinned_message?: Message;
  permissions?: ChatPermissions;
  slow_mode_delay: number;
  message_auto_delete_time?: number;
  has_aggressive_anti_spam_enabled: boolean;
  has_hidden_members?: boolean;
  has_protected_content?: boolean;
  sticker_set_name?: string;
  can_set_sticker_set?: boolean;
  linked_chat_id?: number;
  location?: ChatLocation;
}
