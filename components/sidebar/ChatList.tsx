"use client";

import { MessageSquare, Trash2, Copy } from "lucide-react";
import { useChatStore } from "@/lib/chat-store";

export function ChatList() {
  const { chats, activeChat, setActiveChat } = useChatStore();

  const handleChatSelect = (id: string) => {
    setActiveChat(id);
  };

  return (
    <div className="flex-1 overflow-hidden">
      <div className="space-y-1">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleChatSelect(chat.id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
              activeChat === chat.id
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <MessageSquare className="h-4 w-4 shrink-0" />
            <span className="flex-1 text-sm truncate">
              {chat.title.length > 30 ? chat.title.substring(0, 30) + '...' : chat.title}
            </span>
            {activeChat === chat.id && (
              <div className="flex items-center gap-1">
                <button className="p-1 hover:bg-indigo-700 rounded-md transition-colors">
                  <Copy className="h-3.5 w-3.5" />
                </button>
                <button className="p-1 hover:bg-indigo-700 rounded-md transition-colors">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}