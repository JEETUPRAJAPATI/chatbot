"use client";

import { Copy, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MessageActionsProps {
  onCopy: () => void;
  onDelete: () => void;
}

export function MessageActions({ onCopy, onDelete }: MessageActionsProps) {
  return (
    <div className="flex items-center gap-1">
      <Button 
        size="icon" 
        variant="ghost" 
        onClick={onCopy}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Copy className="h-3.5 w-3.5" />
      </Button>
      <Button 
        size="icon" 
        variant="ghost" 
        onClick={onDelete}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-600"
      >
        <Trash2 className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
}