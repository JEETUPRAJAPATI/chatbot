'use client';

import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ChatHeader() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/80 backdrop-blur p-4">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-medium">AI</span>
        </div>
        <span className="text-sm font-medium">CHAT A.I+</span>
      </div>
      <Button variant="ghost" size="icon">
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
}