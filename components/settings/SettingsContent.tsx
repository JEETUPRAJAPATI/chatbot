"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const themeColors = [
  { name: "Default", value: "rgb(243,247,251)" },
  { name: "Soft Gray", value: "rgb(240,241,242)" },
  { name: "Warm Pink", value: "rgb(252,234,231)" },
  { name: "Mellow Yellow", value: "rgb(245,238,201)" },
  { name: "Fresh Mint", value: "rgb(237,245,216)" },
];

interface SettingsContentProps {
  section: string;
  onClose: () => void;
}

export function SettingsContent({ section, onClose }: SettingsContentProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Settings</h2>
        <button onClick={onClose}>
          <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
        </button>
      </div>

      {section === "general" && (
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-4">Theme</h3>
            <div className="grid grid-cols-5 gap-3">
              {themeColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setTheme(color.value)}
                  className="relative aspect-square rounded-lg transition-all hover:ring-2 hover:ring-gray-300 focus:outline-none"
                  style={{ backgroundColor: color.value }}
                >
                  {theme === color.value && (
                    <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-gray-700" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Always show code when using data analyst</span>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">Language</span>
              <Button variant="outline" size="sm">Auto-detect</Button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">Archived chats</span>
              <Button variant="outline" size="sm">Manage</Button>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <Button variant="outline" className="w-full justify-between" size="sm">
              Archive all chats
              <span className="text-gray-500">Archive all</span>
            </Button>

            <Button variant="outline" className="w-full justify-between" size="sm">
              Delete all chats
              <span className="text-red-500">Delete all</span>
            </Button>

            <Button variant="outline" className="w-full justify-between" size="sm">
              Log out on this device
              <span className="text-gray-500">Log out</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}