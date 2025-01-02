import { IoMdCopy } from 'react-icons/io';
import { MdOutlineThumbUp, MdOutlineThumbDown } from 'react-icons/md';
import { FiShare } from 'react-icons/fi';
import { BsInfoCircle } from 'react-icons/bs';

export default function ChatMessage({ isUser, message, avatar }) {
  if (isUser) {
    return (
      <div className="flex items-start gap-3 py-3">
        <img src={avatar} alt="User" className="w-8 h-8 rounded-full" />
        <div className="flex-1">
          <p>{message}</p>
        </div>
        <button className="p-1.5 hover:bg-gray-100 rounded-full">
          <FiShare className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50/50 py-3">
      <div className="max-w-4xl mx-auto flex items-start gap-3">
        <img src="/logo.png" alt="AI" className="w-8 h-8 rounded-full" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium">CHAT A.I +</span>
          </div>
          <p className="mb-3">{message}</p>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1.5 hover:bg-gray-100 rounded-full">
            <MdOutlineThumbUp className="w-4 h-4" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-full">
            <MdOutlineThumbDown className="w-4 h-4" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-full">
            <IoMdCopy className="w-4 h-4" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-full">
            <BsInfoCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}