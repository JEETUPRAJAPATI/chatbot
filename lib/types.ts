export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
}

export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  isEditing?: boolean;
}

export interface ChatFeature {
  title: string;
  description: string;
  icon: string;
  items: {
    title: string;
    description: string;
    avatar: string;
  }[];
}