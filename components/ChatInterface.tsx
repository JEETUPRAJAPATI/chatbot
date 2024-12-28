"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, Globe, Zap, AlertTriangle, Send } from "lucide-react";
import { Sidebar } from "./sidebar/Sidebar";

const features = [
  {
    category: "Explore",
    icon: <Globe className="h-5 w-5" />,
    description: "Learn how to use choice platform for your needs",
    items: [
      {
        title: "Explain",
        description: "Quantum computing in simple terms",
        avatar: "/quantum.jpg"
      },
      {
        title: "How to",
        description: "Make a search engine platform like google",
        avatar: "/search.jpg"
      }
    ]
  },
  {
    category: "Capabilities",
    icon: <Zap className="h-5 w-5" />,
    description: "How much capable he/she to full fill your needs",
    items: [
      {
        title: "Remember",
        description: "quantum computing in simple terms",
        avatar: "/remember.jpg"
      },
      {
        title: "Allows",
        description: "User to provide follow-up corrections",
        avatar: "/allow.jpg"
      }
    ]
  },
  {
    category: "Limitation",
    icon: <AlertTriangle className="h-5 w-5" />,
    description: "How much capable he/she to full fill your needs",
    items: [
      {
        title: "May",
        description: "Occasionally generate incorrect information",
        avatar: "/may.jpg"
      },
      {
        title: "Limited",
        description: "Knowledge of world and events after 2021",
        avatar: "/limited.jpg"
      }
    ]
  }
];

export default function ChatInterface() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="max-w-4xl mx-auto w-full px-8 py-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-white rounded-full px-6 py-2 mb-4">
              <span className="font-semibold">CHAT A.I+</span>
            </div>
            <h1 className="text-3xl font-bold">
              Good day! How may I assist you today?
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {features.map((feature) => (
              <div key={feature.category} className="flex gap-6">
                <div className="w-48 bg-black text-white p-4 rounded-xl">
                  <div className="mb-2">{feature.icon}</div>
                  <h3 className="font-semibold mb-1">{feature.category}</h3>
                  <p className="text-xs text-gray-400">{feature.description}</p>
                </div>

                <div className="flex-1 space-y-4">
                  {feature.items.map((item) => (
                    <div key={item.title} className="bg-white rounded-xl p-4 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200" />
                      <div className="flex-1">
                        <h4 className="font-semibold">"{item.title}"</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <div className="text-gray-400">→</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Input */}
        <div className="mt-auto p-8">
          <div className="max-w-3xl mx-auto relative">
            <Input
              placeholder="What's in your mind?"
              className="pr-12 pl-12 py-6 rounded-full bg-white"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center">
                <span className="text-pink-500">👋</span>
              </div>
            </div>
            <Button
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 rounded-full w-10 h-10"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}