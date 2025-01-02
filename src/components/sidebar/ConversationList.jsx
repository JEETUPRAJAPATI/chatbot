import { useState } from 'react';
import { BsChatLeftText } from 'react-icons/bs';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { CONVERSATIONS } from '../../utils/constants';

export default function ConversationList() {
  const navigate = useNavigate();
  const [activeChat, setActiveChat] = useState(null);

  const handleConversationClick = (index) => {
    setActiveChat(index);
    navigate('/chat-ai');
  };

  return (
    <div className="flex-1 overflow-y-auto px-2">
      {CONVERSATIONS.map((conv, index) => (
        <div
          key={index}
          onClick={() => handleConversationClick(index)}
          className={`group flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-200 
            ${activeChat === index ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <BsChatLeftText className={activeChat === index ? 'text-blue-600' : 'text-gray-600'} />
            <span className="text-sm truncate">{conv}</span>
          </div>
          <div className={`flex items-center gap-1 ${activeChat === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            <button className="p-1 hover:bg-white rounded-full">
              <FiEdit2 className="w-3.5 h-3.5" />
            </button>
            <button className="p-1 hover:bg-white rounded-full">
              <FiTrash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}