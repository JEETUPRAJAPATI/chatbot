"use client";

import { useState } from "react";
import { User, Bot, Pencil, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatMessageProps {
  id: string;
  chatId: string;
  content: string;
  isUser: boolean;
  isEditing?: boolean;
  onEdit: (chatId: string, messageId: string) => void;
  onSave: (chatId: string, messageId: string, content: string) => void;
}

export function ChatMessage({ 
  id, 
  chatId,
  content, 
  isUser,
  isEditing,
  onEdit,
  onSave,
}: ChatMessageProps) {
  const [editedContent, setEditedContent] = useState(content);

  const handleSave = () => {
    if (editedContent.trim() !== "") {
      onSave(chatId, id, editedContent);
    }
  };

  return (
    <div className={`flex gap-4 p-6 ${isUser ? 'bg-white' : 'bg-gray-50'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
        isUser ? 'bg-indigo-600 text-white' : 'bg-teal-600 text-white'
      }`}>
        {isUser ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </div>
      <div className="flex-1 prose max-w-none">
        {isEditing ? (
          <div className="flex gap-2">
            <Input
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="flex-1"
            />
            <Button size="icon" onClick={handleSave}>
              <Check className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" onClick={() => onEdit(chatId, id)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="flex group">
            <p className="text-gray-700 flex-1">{content}</p>
            {isUser && (
              <Button
                size="icon"
                variant="ghost"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => onEdit(chatId, id)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}