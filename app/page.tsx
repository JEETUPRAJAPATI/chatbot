"use client";

import { useState } from "react";
import LoginPage from "@/components/LoginPage";
import ChatInterface from "@/components/ChatInterface";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // Dummy login - in production, this would validate against a backend
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <main className="min-h-screen">
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <ChatInterface />
      )}
    </main>
  );
}