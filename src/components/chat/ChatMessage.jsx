import { useState } from 'react';
import { IoMdCopy } from 'react-icons/io';
import { MdOutlineThumbUp, MdOutlineThumbDown } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
import { FiEdit2 } from 'react-icons/fi';
import EditableMessage from './EditableMessage';

export default function ChatMessage({ 
  message, 
  isEditing, 
  onEdit, 
  onSave, 
  onCancel 
}) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    setLiked(false);
  };

  const MessageActions = () => (
    <div className="flex items-center gap-1">
      <button 
        className={`p-1.5 rounded-full ${liked ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
        onClick={handleLike}
      >
        <MdOutlineThumbUp className="w-4 h-4" />
      </button>
      <button 
        className={`p-1.5 rounded-full ${disliked ? 'bg-red-50 text-red-600' : 'hover:bg-gray-100'}`}
        onClick={handleDislike}
      >
        <MdOutlineThumbDown className="w-4 h-4" />
      </button>
      <button className="p-1.5 hover:bg-gray-100 rounded-full">
        <IoMdCopy className="w-4 h-4" />
      </button>
      {message.isUser && (
        <button 
          className="p-1.5 hover:bg-gray-100 rounded-full"
          onClick={() => onEdit(message.id)}
        >
          <FiEdit2 className="w-4 h-4" />
        </button>
      )}
      <button className="p-1.5 hover:bg-gray-100 rounded-full">
        <BsInfoCircle className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="py-4">
      <div className="max-w-4xl mx-auto flex items-start gap-3">
        <img 
          src={message.isUser ? "/user-avatar.png" : "/logo.png"} 
          alt={message.isUser ? "User" : "AI"} 
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1">
          {!message.isUser && (
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium">CHAT A.I +</span>
            </div>
          )}
          {isEditing ? (
            <EditableMessage
              message={message}
              onSave={onSave}
              onCancel={onCancel}
            />
          ) : (
            <p className="text-sm leading-relaxed">{message.content}</p>
          )}
        </div>
        <MessageActions />
      </div>
    </div>
  );
}