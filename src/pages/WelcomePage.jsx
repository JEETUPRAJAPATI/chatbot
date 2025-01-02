import WelcomeHeader from '../components/welcome/WelcomeHeader';
import FeatureSection from '../components/welcome/FeatureSection';
import ChatInput from '../components/chat/ChatInput';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleSendMessage = (message) => {
    navigate('/chat-ai', { state: { initialPrompt: message } });
  };

  return (
    <div className="flex-1 bg-gray-50/50 p-8">
      <div className="max-w-5xl mx-auto">
        <WelcomeHeader />
        <FeatureSection />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}