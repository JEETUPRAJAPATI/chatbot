export interface ChatItem {
  id: string;
  title: string;
  isActive?: boolean;
  isDisabled?: boolean;
}

export interface ChatState {
  selectedChatId: string | null;
  chats: ChatItem[];
  recentChats: ChatItem[];
}