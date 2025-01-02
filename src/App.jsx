import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './pages/LandingPage';
import NewChatPage from './pages/NewChatPage';
import ChatAIPage from './pages/ChatAIPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/new-chat" element={<NewChatPage />} />
          <Route path="/chat-ai" element={<ChatAIPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;