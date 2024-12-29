"use client";

import { MessageBubble } from "./MessageBubble";
import { MessageActions } from "./MessageActions";
import { Message } from "@/lib/types";

interface MessageListProps {
  messages: Message[];
  onCopyMessage: (id: string) => void;
  onDeleteMessage: (id: string) => void;
}

export function MessageList({ messages, onCopyMessage, onDeleteMessage }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message) => (
        <div key={message.id} className="group relative">
          <MessageBubble
            content={message.content}
            isUser={message.isUser}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <MessageActions
              onCopy={() => onCopyMessage(message.id)}
              onDelete={() => onDeleteMessage(message.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}