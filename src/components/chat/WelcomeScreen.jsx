import { useNavigate } from 'react-router-dom';

export default function WelcomeScreen() {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: "🌐",
      title: "Explore",
      description: "Learn how to use chat ai platform",
      examples: [
        { 
          title: "Explain",
          description: "Quantum computing in simple terms",
          avatar: "/avatars/quantum.png"
        },
        { 
          title: "How to",
          description: "Make a search engine platform like google",
          avatar: "/avatars/search.png"
        }
      ]
    },
    {
      icon: "⚡",
      title: "Capabilities",
      description: "AI capabilities and features",
      examples: [
        { 
          title: "Remember",
          description: "quantum computing in simple terms",
          avatar: "/avatars/memory.png"
        },
        { 
          title: "Allows",
          description: "User to provide follow-up corrections",
          avatar: "/avatars/feedback.png"
        }
      ]
    },
    {
      icon: "⚠️",
      title: "Limitation",
      description: "Current limitations",
      examples: [
        { 
          title: "May",
          description: "Occasionally generate incorrect information",
          avatar: "/avatars/warning.png"
        },
        { 
          title: "Limited",
          description: "Knowledge of world and events after 2021",
          avatar: "/avatars/limit.png"
        }
      ]
    }
  ];

  return (
    <div className="flex-1 bg-gray-50/50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <img src="/logo.png" alt="CHAT A.I+" className="h-8 mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Good day! How may I assist you today?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-black text-white p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{feature.icon}</span>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
              {feature.examples.map((example, i) => (
                <div 
                  key={i} 
                  className="group flex items-center gap-3 bg-white/10 p-3 rounded-lg mb-2 hover:bg-white/20 transition-all cursor-pointer"
                  onClick={() => navigate('/chat-ai')}
                >
                  <img 
                    src={example.avatar} 
                    alt={example.title}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium group-hover:text-blue-300 transition-colors">
                      "{example.title}"
                    </p>
                    <p className="text-xs text-gray-400">{example.description}</p>
                  </div>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}