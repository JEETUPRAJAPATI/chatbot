"use client";

import { User, Bot } from "lucide-react";

interface MessageBubbleProps {
  content: string;
  isUser: boolean;
}

export function MessageBubble({ content, isUser }: MessageBubbleProps) {
  return (
    <div className={`flex gap-4 p-6 ${isUser ? 'bg-white' : 'bg-gray-50'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isUser ? 'bg-indigo-600 text-white' : 'bg-teal-600 text-white'
      }`}>
        {isUser ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </div>
      <div className="flex-1">
        <div className="prose max-w-none">
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
}