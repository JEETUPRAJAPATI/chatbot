import { IoSend } from 'react-icons/io5';

export default function ChatInput() {
  return (
    <div className="fixed bottom-4 right-4 left-4 lg:right-4 lg:left-[17rem] max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg flex items-center p-3">
        <input
          type="text"
          placeholder="What's in your mind?..."
          className="flex-1 outline-none px-3"
        />
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <IoSend className="w-5 h-5 text-blue-600" />
        </button>
      </div>
    </div>
  );
}