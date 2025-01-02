import { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { BsEmojiSmile } from 'react-icons/bs';

export default function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="fixed bottom-4 right-4 left-4 lg:right-4 lg:left-[17rem] max-w-4xl mx-auto">
      <div className="bg-white rounded-full shadow-lg flex items-center p-2 px-4">
        <button type="button" className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
          <BsEmojiSmile className="w-5 h-5" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
  );
}