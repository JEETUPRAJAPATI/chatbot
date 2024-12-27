'use client';

import { MessageSquarePlus, Settings, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { ChatList } from './chat-list';
import { useChat } from '@/lib/hooks/use-chat';
import { useState } from 'react';

export function ChatSidebar() {
  const { createNewChat } = useChat();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-40 md:hidden"
        onClick={() => setIsMobileOpen(true)}
      >
        <MessageSquarePlus className="h-5 w-5" />
      </Button>
      
      <div className={`
        fixed inset-y-0 left-0 z-30 flex w-[280px] flex-col bg-background
        border-r transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:relative
      `}>
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">CHAT A.I+</h1>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <Button
          onClick={() => {
            createNewChat();
            setIsMobileOpen(false);
          }}
          className="mx-4 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <MessageSquarePlus className="mr-2 h-4 w-4" />
          New chat
        </Button>

        <div className="flex-1 overflow-hidden flex flex-col mt-4">
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-xs font-medium text-muted-foreground">Your conversations</span>
            <Button variant="ghost" size="sm" className="text-xs text-primary hover:text-primary/90">
              Clear All
            </Button>
          </div>
          <ChatList onItemClick={() => setIsMobileOpen(false)} />
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-medium">AN</span>
            </div>
            <span className="text-sm font-medium">Andrew Neilson</span>
          </div>
        </div>
      </div>
    </>
  );
}