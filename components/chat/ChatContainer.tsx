"use client";

import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { useChatStore } from "@/lib/chat-store";

export function ChatContainer() {
  const { activeChat, chats, addMessage, deleteMessage } = useChatStore();
  const currentChat = chats.find((chat) => chat.id === activeChat);
  
  const handleSendMessage = (content: string) => {
    if (!activeChat) return;
    
    addMessage(activeChat, content, true);
    
    // Simulate AI response
    setTimeout(() => {
      addMessage(
        activeChat,
        "I understand you're asking about creating a chatbot. Let me help you with that...",
        false
      );
    }, 1000);
  };

  const handleCopyMessage = (messageId: string) => {
    const message = currentChat?.messages.find((m) => m.id === messageId);
    if (message) {
      navigator.clipboard.writeText(message.content);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ChatHeader />
      {currentChat && (
        <>
          <MessageList
            messages={currentChat.messages}
            onCopyMessage={handleCopyMessage}
            onDeleteMessage={(id) => deleteMessage(activeChat, id)}
          />
          <ChatInput onSendMessage={handleSendMessage} />
        </>
      )}
    </div>
  );
}