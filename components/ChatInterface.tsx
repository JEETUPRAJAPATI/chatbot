"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { ChatMessage } from "./chat/ChatMessage";
import { ChatInput } from "./chat/ChatInput";
import { useChatStore } from "@/lib/chat-store";
import { WelcomeScreen } from "./chat/WelcomeScreen";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function ChatInterface() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { 
    chats, 
    activeChat, 
    createNewChat, 
    addMessage,
    updateMessage,
    toggleMessageEdit
  } = useChatStore();
  
  const currentChat = chats.find((chat) => chat.id === activeChat);

  useEffect(() => {
    if (chats.length === 0) {
      createNewChat();
    }
  }, [chats.length, createNewChat]);

  const handleSendMessage = async (content: string) => {
    if (!activeChat) return;
    addMessage(activeChat, content, true);
    setTimeout(() => {
      addMessage(
        activeChat,
        "This is a simulated response. In a real application, this would be replaced with an actual API call to your AI service.",
        false
      );
    }, 1000);
  };

  return (
    <div className="flex h-screen relative">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden absolute top-2 left-2 z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar with responsive behavior */}
      <div className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        fixed lg:relative
        z-40 lg:z-auto
        transition-transform duration-300
        h-full
      `}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col w-full" style={{ background: 'var(--theme-background)' }}>
        {currentChat ? (
          <>
            <div className="flex-1 overflow-auto pb-20 md:pb-0">
              {currentChat.messages.length === 0 ? (
                <WelcomeScreen />
              ) : (
                currentChat.messages.map((message) => (
                  <ChatMessage
                    key={message.id}
                    id={message.id}
                    chatId={currentChat.id}
                    content={message.content}
                    isUser={message.isUser}
                    isEditing={message.isEditing}
                    onEdit={toggleMessageEdit}
                    onSave={updateMessage}
                  />
                ))
              )}
            </div>
            <ChatInput onSendMessage={handleSendMessage} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}