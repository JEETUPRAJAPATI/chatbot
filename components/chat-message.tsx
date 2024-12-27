'use client';

import { User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  content: string;
  role: 'user' | 'assistant';
}

export function ChatMessage({ content, role }: ChatMessageProps) {
  return (
    <div className={cn(
      'flex gap-4 p-6',
      role === 'assistant' ? 'bg-muted/50' : 'bg-background'
    )}>
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary">
        {role === 'user' ? (
          <User className="h-5 w-5 text-primary-foreground" />
        ) : (
          <Bot className="h-5 w-5 text-primary-foreground" />
        )}
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-sm font-medium">{role === 'user' ? 'You' : 'Assistant'}</p>
        <div className="prose dark:prose-invert max-w-none">
          {content}
        </div>
      </div>
    </div>
  );
}