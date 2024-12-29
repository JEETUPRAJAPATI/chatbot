"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SettingsSidebar } from "./SettingsSidebar";
import { SettingsContent } from "./SettingsContent";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [activeSection, setActiveSection] = useState("general");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 gap-0">
        <VisuallyHidden>
          <DialogTitle>Settings</DialogTitle>
        </VisuallyHidden>
        <div className="flex h-[600px]">
          <SettingsSidebar activeSection={activeSection} onSelect={setActiveSection} />
          <SettingsContent section={activeSection} onClose={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
}