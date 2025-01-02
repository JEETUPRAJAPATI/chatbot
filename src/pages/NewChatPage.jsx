import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import WelcomeScreen from '../components/chat/WelcomeScreen';
import { IoSend } from 'react-icons/io5';
import { BsEmojiSmile } from 'react-icons/bs';

export default function NewChatPage() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate('/chat-ai', { state: { initialPrompt: prompt } });
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col relative">
        <WelcomeScreen />
        
        <form 
          onSubmit={handleSubmit}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
        >
          <div className="bg-white rounded-full shadow-lg flex items-center p-2 px-4">
            <button 
              type="button" 
              className="p-2 hover:bg-gray-100 rounded-full text-gray-500"
            >
              <BsEmojiSmile className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="What's in your mind?..."
              className="flex-1 outline-none px-3 text-sm"
            />
            <button 
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <IoSend className="w-5 h-5" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}