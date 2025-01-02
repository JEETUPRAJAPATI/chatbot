import { IoSend } from 'react-icons/io5';

export default function ChatArea() {
  const features = [
    {
      title: "Explore",
      description: "Learn how to use chat ai platform",
      examples: [
        { title: "Explain", description: "Quantum computing" },
        { title: "How to", description: "Build a search engine" }
      ]
    },
    {
      title: "Capabilities",
      description: "AI capabilities and features",
      examples: [
        { title: "Remember", description: "Context and history" },
        { title: "Allows", description: "Follow-up corrections" }
      ]
    },
    {
      title: "Limitation",
      description: "Current limitations",
      examples: [
        { title: "May", description: "Generate incorrect info" },
        { title: "Limited", description: "Knowledge after 2021" }
      ]
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="CHAT A.I+" className="h-8 mx-auto mb-3" />
          <h1 className="text-3xl font-bold">How may I assist you today?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-black text-white p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
              {feature.examples.map((example, i) => (
                <div key={i} className="bg-white/10 p-3 rounded-lg mb-2">
                  <p className="text-sm font-medium">"{example.title}"</p>
                  <p className="text-xs text-gray-300">{example.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
          <div className="bg-white rounded-full shadow-lg flex items-center p-3">
            <input
              type="text"
              placeholder="What's in your mind?..."
              className="flex-1 outline-none px-4"
            />
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <IoSend className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}