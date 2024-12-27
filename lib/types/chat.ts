export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
}

export interface Chat {
  id: string;
  title: string;
  timestamp: Date;
  messages: Message[];
}