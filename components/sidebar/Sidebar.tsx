"use client";

import { Plus, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatList } from "./ChatList";
import { UserProfile } from "./UserProfile";
import { useChatStore } from "@/lib/chat-store";

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const createNewChat = useChatStore((state) => state.createNewChat);

  return (
    <div className="w-[280px] sm:w-64 bg-white flex flex-col h-full p-4">
      <div className="flex items-center justify-between mb-6">
        <span className="font-bold text-lg">CHAT A.I+</span>
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className="flex gap-2 mb-6">
        <Button 
          onClick={createNewChat}
          className="flex-1 gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-5"
          variant="default"
        >
          <Plus className="h-4 w-4" /> New chat
        </Button>
        <Button 
          size="icon" 
          variant="outline"
          className="rounded-full w-10 h-10 border-gray-200 hover:bg-gray-50"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <ChatList />
      <UserProfile />
    </div>
  );
}