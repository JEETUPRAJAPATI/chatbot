import FeatureCard from './FeatureCard';
import { FiGlobe, FiZap, FiAlertTriangle } from 'react-icons/fi';

const features = [
  {
    icon: <FiGlobe className="w-6 h-6" />,
    title: "Explore",
    description: "Learn how to use chat ai platform",
    examples: [
      {
        title: "Explain",
        description: "Quantum computing in simple terms"
      },
      {
        title: "How to",
        description: "Make a search engine platform like google"
      }
    ]
  },
  {
    icon: <FiZap className="w-6 h-6" />,
    title: "Capabilities",
    description: "AI capabilities and features",
    examples: [
      {
        title: "Remember",
        description: "Context and previous conversations"
      },
      {
        title: "Allows",
        description: "User to provide follow-up corrections"
      }
    ]
  },
  {
    icon: <FiAlertTriangle className="w-6 h-6" />,
    title: "Limitation",
    description: "Current limitations",
    examples: [
      {
        title: "May",
        description: "Occasionally generate incorrect information"
      },
      {
        title: "Limited",
        description: "Knowledge of world and events after 2021"
      }
    ]
  }
];

export default function FeatureSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}