'use client';

import { useState } from 'react';
import { Chat, Message } from '@/lib/types/chat';

const DUMMY_CHATS: Chat[] = [
  {
    id: '1',
    title: 'Create Html Game Environment...',
    timestamp: new Date(),
    messages: [],
  },
  {
    id: '2',
    title: 'Apply To Leave For Emergency',
    timestamp: new Date(),
    messages: [],
  },
  {
    id: '3',
    title: 'What Is UI UX Design?',
    timestamp: new Date(),
    messages: [],
  },
  {
    id: '4',
    title: 'Create POS System',
    timestamp: new Date(),
    messages: [],
  },
  {
    id: '5',
    title: 'What Is UX Audit?',
    timestamp: new Date(),
    messages: [],
  },
  {
    id: '6',
    title: 'Create Chatbot GPT...',
    timestamp: new Date(),
    messages: [],
  },
  {
    id: '7',
    title: 'How Chat GPT Work?',
    timestamp: new Date(),
    messages: [],
  },
];

export function useChat() {
  const [chats, setChats] = useState<Chat[]>(DUMMY_CHATS);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: 'New Chat',
      timestamp: new Date(),
      messages: [],
    };
    setChats([newChat, ...chats]);
    setSelectedChat(newChat.id);
    return newChat;
  };

  const deleteChat = (id: string) => {
    setChats(chats.filter(chat => chat.id !== id));
    if (selectedChat === id) {
      setSelectedChat(null);
    }
  };

  const editChatTitle = (id: string, newTitle: string) => {
    setChats(chats.map(chat => 
      chat.id === id ? { ...chat, title: newTitle } : chat
    ));
  };

  const addMessage = (chatId: string, message: Message) => {
    setChats(chats.map(chat => {
      if (chat.id === chatId) {
        return {
          ...chat,
          messages: [...chat.messages, message],
        };
      }
      return chat;
    }));
  };

  const getCurrentChat = () => {
    return chats.find(chat => chat.id === selectedChat);
  };

  return {
    chats,
    selectedChat,
    setSelectedChat,
    createNewChat,
    deleteChat,
    editChatTitle,
    addMessage,
    getCurrentChat,
  };
}