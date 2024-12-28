"use client";

import { Settings } from "lucide-react";

export function UserProfile() {
  return (
    <div className="mt-auto pt-4 space-y-1">
      <div className="px-3 py-2.5 hover:bg-gray-100 rounded-lg cursor-pointer">
        <div className="flex items-center gap-3">
          <Settings className="h-4 w-4 text-gray-600" />
          <span className="text-sm text-gray-700">Settings</span>
        </div>
      </div>
      
      <div className="px-3 py-2.5 hover:bg-gray-100 rounded-lg cursor-pointer">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-5 h-5 rounded-full"
          />
          <span className="text-sm text-gray-700">Andrew Neilson</span>
        </div>
      </div>
    </div>
  );
}