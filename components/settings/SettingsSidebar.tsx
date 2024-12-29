"use client";

import { Settings, User, MessageSquare, Database, Layout, Share2, Shield } from "lucide-react";

const sections = [
  { id: "general", icon: Settings, label: "General" },
  { id: "personalization", icon: User, label: "Personalization" },
  { id: "speech", icon: MessageSquare, label: "Speech" },
  { id: "data", icon: Database, label: "Data controls" },
  { id: "builder", icon: Layout, label: "Builder profile" },
  { id: "connected", icon: Share2, label: "Connected apps" },
  { id: "security", icon: Shield, label: "Security" },
];

interface SettingsSidebarProps {
  activeSection: string;
  onSelect: (section: string) => void;
}

export function SettingsSidebar({ activeSection, onSelect }: SettingsSidebarProps) {
  return (
    <div className="w-64 border-r border-gray-200 p-4 space-y-1">
      {sections.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${
            activeSection === id
              ? "bg-gray-100 text-gray-900"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}