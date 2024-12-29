"use client";

import { Globe, Zap, AlertTriangle } from "lucide-react";

const features = [
  {
    category: "Explore",
    icon: <Globe className="h-5 w-5" />,
    description: "Learn how to use choice platform for your needs",
    items: [
      {
        title: "Explain",
        description: "Quantum computing in simple terms",
      },
      {
        title: "How to",
        description: "Make a search engine platform like google",
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
        description: "Previous conversations and context",
      },
      {
        title: "Allows",
        description: "User to provide follow-up corrections",
      }
    ]
  },
  {
    category: "Limitation",
    icon: <AlertTriangle className="h-5 w-5" />,
    description: "Understanding system boundaries",
    items: [
      {
        title: "May",
        description: "Occasionally generate incorrect information",
      },
      {
        title: "Limited",
        description: "Knowledge of world and events after 2021",
      }
    ]
  }
];

export function WelcomeScreen() {
  return (
    <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-block bg-white rounded-full px-4 sm:px-6 py-2 mb-4">
          <span className="font-semibold">CHAT A.I+</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Good day! How may I assist you today?
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {features.map((feature) => (
          <div key={feature.category} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="w-full sm:w-48 bg-black text-white p-4 rounded-xl">
              <div className="mb-2">{feature.icon}</div>
              <h3 className="font-semibold mb-1">{feature.category}</h3>
              <p className="text-xs text-gray-400">{feature.description}</p>
            </div>

            <div className="flex-1 space-y-3 sm:space-y-4">
              {feature.items.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-4 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate">"{item.title}"</h4>
                    <p className="text-sm text-gray-600 truncate">{item.description}</p>
                  </div>
                  <div className="text-gray-400 hidden sm:block">→</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}