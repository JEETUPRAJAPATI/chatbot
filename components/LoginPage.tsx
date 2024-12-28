"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero section */}
      <div className="flex-1 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 p-12 text-white flex flex-col">
        <div className="text-2xl font-bold mb-8">CHAT A.I+</div>
        <div className="mt-20">
          <h1 className="text-5xl font-bold mb-4">
            Learn, Discover &<br />
            Automate in One Place.
          </h1>
          
          <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <p className="text-sm mb-4">Create a chatbot api using python language what will be step for that</p>
            <div className="space-y-4">
              <p className="text-sm">1. Install the required libraries. You'll need to install the transformers library from...</p>
              <p className="text-sm">2. Load the pre-trained model. GPT comes in several sizes and versions, so you'll need...</p>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <Input 
                className="bg-white/10 border-none text-white placeholder:text-white/60"
                placeholder="Reply..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Sign up with free trail</h2>
          <p className="text-gray-600 mb-8">Empower your experience, sign up for a free account today</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hi.jhon@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password*
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Get started free
            </Button>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Login
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <img src="https://www.svgrepo.com/show/452156/apple.svg" alt="Apple" className="w-5 h-5 mr-2" />
                Apple
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}