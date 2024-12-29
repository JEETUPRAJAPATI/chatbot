"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Chat, Message } from './types';

interface ChatStore {
  chats: Chat[];
  activeChat: string | null;
  createNewChat: () => void;
  addMessage: (chatId: string, content: string, isUser: boolean) => void;
  deleteMessage: (chatId: string, messageId: string) => void;
  setActiveChat: (chatId: string) => void;
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      chats: [],
      activeChat: null,
      createNewChat: () => {
        const newChat: Chat = {
          id: crypto.randomUUID(),
          title: 'New Chat',
          messages: [],
          createdAt: new Date(),
        };
        set((state) => ({
          chats: [newChat, ...state.chats],
          activeChat: newChat.id,
        }));
      },
      addMessage: (chatId, content, isUser) => {
        const message: Message = {
          id: crypto.randomUUID(),
          content,
          isUser,
          timestamp: new Date(),
        };
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === chatId
              ? {
                  ...chat,
                  messages: [...chat.messages, message],
                  title: chat.messages.length === 0 && isUser ? content : chat.title,
                }
              : chat
          ),
        }));
      },
      deleteMessage: (chatId, messageId) => {
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === chatId
              ? {
                  ...chat,
                  messages: chat.messages.filter((msg) => msg.id !== messageId),
                }
              : chat
          ),
        }));
      },
      setActiveChat: (chatId) => set({ activeChat: chatId }),
    }),
    {
      name: 'chat-store',
    }
  )
);