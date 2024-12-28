"use client";

import { useState } from "react";
import { MessageSquare, Trash2, Copy } from "lucide-react";
import { ChatItem } from "./types";

const initialChats: ChatItem[] = [
  { id: '1', title: 'Create Html Game Environment...' },
  { id: '2', title: 'Apply To Leave For Emergency' },
  { id: '3', title: 'What Is UI UX Design?' },
  { id: '4', title: 'Create POS System' },
  { id: '5', title: 'What Is UX Audit?' },
  { id: '6', title: 'Create Chatbot GPT...', isActive: true },
  { id: '7', title: 'How Chat GPT Work?' },
];

const initialRecentChats: ChatItem[] = [
  { id: '8', title: 'Crypto Lending App Name' },
  { id: '9', title: 'Operator Grammar Types' },
  { id: '10', title: 'Min Shares For Binary DFA', isDisabled: true },
];

export function ChatList() {
  const [selectedChat, setSelectedChat] = useState<string>('6'); // Set default active chat
  const [chats, setChats] = useState(initialChats);
  const [recentChats, setRecentChats] = useState(initialRecentChats);

  const handleChatSelect = (id: string) => {
    setSelectedChat(id);
  };

  const handleClearAll = () => {
    setChats([]);
    setRecentChats([]);
  };

  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex justify-between items-center text-xs mb-2">
        <span className="text-gray-500">Your conversations</span>
        <button 
          onClick={handleClearAll}
          className="text-indigo-600 hover:text-indigo-700"
        >
          Clear All
        </button>
      </div>
      
      <div className="space-y-1">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleChatSelect(chat.id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer ${
              selectedChat === chat.id
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <MessageSquare className="h-4 w-4 shrink-0" />
            <span className="flex-1 text-sm truncate">{chat.title}</span>
            {selectedChat === chat.id && (
              <div className="flex items-center gap-1">
                <button className="p-1 hover:bg-indigo-700 rounded-md">
                  <Copy className="h-3.5 w-3.5" />
                </button>
                <button className="p-1 hover:bg-indigo-700 rounded-md">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {recentChats.length > 0 && (
        <>
          <div className="mt-6 mb-2">
            <span className="text-xs text-gray-500">Last 7 Days</span>
          </div>

          <div className="space-y-1">
            {recentChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => !chat.isDisabled && handleChatSelect(chat.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                  chat.isDisabled 
                    ? 'text-gray-300 cursor-default' 
                    : selectedChat === chat.id
                      ? 'bg-indigo-600 text-white cursor-pointer'
                      : 'text-gray-700 hover:bg-gray-100 cursor-pointer'
                }`}
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span className="flex-1 text-sm truncate">{chat.title}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}