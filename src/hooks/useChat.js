import { useState } from 'react';

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [editingMessageId, setEditingMessageId] = useState(null);

  const addMessage = (content, isUser = true) => {
    const newMessage = {
      id: Date.now(),
      content,
      isUser,
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, newMessage]);
    
    if (isUser) {
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          content: `This is a simulated response to: "${content}"`,
          isUser: false,
          timestamp: new Date().toISOString(),
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const updateMessage = (id, newContent) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === id ? { ...msg, content: newContent } : msg
      )
    );
    setEditingMessageId(null);
  };

  const startEditing = (id) => {
    setEditingMessageId(id);
  };

  const cancelEditing = () => {
    setEditingMessageId(null);
  };

  return {
    messages,
    editingMessageId,
    addMessage,
    updateMessage,
    startEditing,
    cancelEditing,
  };
}