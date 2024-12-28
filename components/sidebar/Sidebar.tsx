"use client";

import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatList } from "./ChatList";
import { UserProfile } from "./UserProfile";

export function Sidebar() {
  return (
    <div className="w-64 bg-white flex flex-col p-4">
      <div className="mb-6">
        <span className="font-bold text-lg">CHAT A.I+</span>
      </div>

      <div className="flex gap-2 mb-6">
        <Button 
          className="flex-1 gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-5"
          variant="default"
        >
          <Plus className="h-4 w-4" /> New chat
        </Button>
        <Button 
          size="icon" 
          variant="outline"
          className="rounded-full w-10 h-10 border-gray-200"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <ChatList />
      <UserProfile />
    </div>
  );
}