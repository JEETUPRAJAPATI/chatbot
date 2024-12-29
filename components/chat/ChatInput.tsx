"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8 fixed bottom-0 left-0 right-0 lg:static bg-white/80 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto relative">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's in your mind?"
          className="pr-12 pl-12 py-4 sm:py-6 rounded-full bg-white"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center">
            <span className="text-pink-500">👋</span>
          </div>
        </div>
        <Button
          type="submit"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 rounded-full w-10 h-10"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}