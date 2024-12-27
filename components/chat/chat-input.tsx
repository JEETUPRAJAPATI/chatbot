'use client';

import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="border-t bg-background p-4">
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl relative">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's in your mind?"
          className="min-h-[56px] w-full pr-12 resize-none bg-background rounded-xl border-muted"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-2 bottom-2 rounded-lg bg-primary hover:bg-primary/90"
          disabled={!input.trim()}
        >
          <Send className="h-4 w-4 text-primary-foreground" />
        </Button>
      </form>
    </div>
  );
}