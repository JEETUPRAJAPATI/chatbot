'use client';

import { MessageSquarePlus, Trash2, Edit, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { useChat } from '@/lib/hooks/use-chat';

export function ChatSidebar() {
  const { chats, selectedChat, setSelectedChat, createNewChat, deleteChat } = useChat();

  return (
    <div className="flex h-screen w-80 flex-col bg-card border-r">
      <div className="p-4 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Chat AI+</h1>
        <ThemeToggle />
      </div>
      
      <Button
        className="mx-4 mt-4 mb-2"
        onClick={createNewChat}
      >
        <MessageSquarePlus className="mr-2 h-4 w-4" />
        New Chat
      </Button>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center justify-between p-3 rounded-lg hover:bg-accent cursor-pointer ${
              selectedChat === chat.id ? 'bg-accent' : ''
            }`}
            onClick={() => setSelectedChat(chat.id)}
          >
            <span className="truncate">{chat.title}</span>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteChat(chat.id);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  );
}