"use client";

import { Bot } from "lucide-react";

export function ChatHeader() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3 px-6 py-4">
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
          <Bot className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2 className="font-semibold">CHAT A.I+</h2>
          <p className="text-sm text-gray-500">Ask me anything...</p>
        </div>
      </div>
    </div>
  );
}