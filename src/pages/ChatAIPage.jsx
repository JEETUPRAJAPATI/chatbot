import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import Sidebar from '../components/Sidebar';
import MessageList from '../components/chat/MessageList';
import MessageInput from '../components/chat/MessageInput';
import { useTheme } from '../context/ThemeContext';
import { useChat } from '../hooks/useChat';

export default function ChatAIPage() {
  const location = useLocation();
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { 
    messages, 
    editingMessageId,
    addMessage, 
    updateMessage,
    startEditing,
    cancelEditing
  } = useChat();

  useEffect(() => {
    const initialPrompt = location.state?.initialPrompt;
    if (initialPrompt) {
      addMessage(initialPrompt);
    }
  }, [location.state]);

  const handleSendMessage = (content) => {
    addMessage(content);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className={`flex-1 flex flex-col ${theme.bg} ${theme.text}`}>
        <div className="lg:hidden flex items-center p-4 bg-white border-b">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <IoMenu className="w-6 h-6" />
          </button>
        </div>
        
        <MessageList
          messages={messages}
          editingMessageId={editingMessageId}
          onEditMessage={startEditing}
          onUpdateMessage={updateMessage}
          onCancelEdit={cancelEditing}
        />
        <MessageInput onSendMessage={handleSendMessage} />
      </main>
    </div>
  );
}