'use client';

import { User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Message } from '@/lib/types/chat';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={cn(
      'px-4 py-6',
      isUser ? 'bg-background' : 'bg-muted/50'
    )}>
      <div className="mx-auto max-w-2xl flex gap-4">
        <div className={cn(
          'h-7 w-7 rounded-md flex items-center justify-center',
          isUser ? 'bg-primary' : 'bg-primary/10'
        )}>
          {isUser ? (
            <User className="h-4 w-4 text-primary-foreground" />
          ) : (
            <Bot className="h-4 w-4" />
          )}
        </div>
        <div className="flex-1 space-y-2">
          <p className="font-medium text-sm">
            {isUser ? 'You' : 'Assistant'}
          </p>
          <div className="prose dark:prose-invert">
            {message.content}
          </div>
        </div>
      </div>
    </div>
  );
}