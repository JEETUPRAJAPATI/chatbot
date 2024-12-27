'use client';

import { useState } from 'react';
import { useChat } from '@/lib/hooks/use-chat';
import { MessageSquare, Edit2, Trash2, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatListProps {
  onItemClick?: () => void;
}

export function ChatList({ onItemClick }: ChatListProps) {
  const { chats, selectedChat, setSelectedChat, deleteChat, editChatTitle } = useChat();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  const startEditing = (id: string, title: string) => {
    setEditingId(id);
    setEditValue(title);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditValue('');
  };

  const saveEdit = (id: string) => {
    if (editValue.trim()) {
      editChatTitle(id, editValue.trim());
    }
    cancelEditing();
  };

  return (
    <div className="flex-1 overflow-y-auto px-2 space-y-1">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`group relative flex items-center rounded-lg px-3 py-2
            transition-colors duration-200
            ${selectedChat === chat.id 
              ? 'bg-primary/10 text-primary' 
              : 'hover:bg-muted/80'
            }`}
        >
          {editingId === chat.id ? (
            <div className="flex items-center gap-2 w-full">
              <MessageSquare className="h-4 w-4 shrink-0 text-primary" />
              <Input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="h-7 text-sm"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') saveEdit(chat.id);
                  if (e.key === 'Escape') cancelEditing();
                }}
              />
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => saveEdit(chat.id)}
                >
                  <Check className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={cancelEditing}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={() => {
                  setSelectedChat(chat.id);
                  onItemClick?.();
                }}
                className="flex items-center gap-3 flex-1 text-sm"
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span className="truncate text-left">{chat.title}</span>
              </button>
              <div className="absolute right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => startEditing(chat.id, chat.title)}
                >
                  <Edit2 className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => deleteChat(chat.id)}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}