'use client';

import { useEffect } from 'react';
import { ChatSidebar } from '@/components/chat/chat-sidebar';
import { ChatMessage } from '@/components/chat/chat-message';
import { ChatInput } from '@/components/chat/chat-input';
import { ChatHeader } from '@/components/chat/chat-header';
import { useChat } from '@/lib/hooks/use-chat';

export default function Home() {
  const { createNewChat, getCurrentChat, selectedChat, addMessage } = useChat();

  useEffect(() => {
    if (!selectedChat) {
      createNewChat();
    }
  }, [selectedChat]);

  const currentChat = getCurrentChat();

  const handleSendMessage = (content: string) => {
    if (!selectedChat) return;

    const userMessage = {
      id: Date.now().toString(),
      content,
      role: 'user' as const,
    };
    
    addMessage(selectedChat, userMessage);

    setTimeout(() => {
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        content: 'This is a simulated response. In a real application, this would be replaced with an actual AI response.',
        role: 'assistant' as const,
      };
      addMessage(selectedChat, assistantMessage);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-background">
      <ChatSidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <ChatHeader />
        <div className="flex-1 overflow-y-auto">
          {currentChat?.messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
        <ChatInput onSend={handleSendMessage} />
      </main>
    </div>
  );
}