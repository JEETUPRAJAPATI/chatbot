export default function FeatureCard({ icon, title, description, examples }) {
  return (
    <div className="bg-black text-white p-6 rounded-xl">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="space-y-2">
        {examples.map((example, index) => (
          <ExampleItem key={index} {...example} />
        ))}
      </div>
    </div>
  );
}

function ExampleItem({ title, description }) {
  return (
    <div className="group flex items-center gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all cursor-pointer">
      <div className="w-8 h-8 bg-gray-600 rounded-full flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium group-hover:text-blue-300 transition-colors truncate">
          "{title}"
        </p>
        <p className="text-xs text-gray-400 truncate">{description}</p>
      </div>
      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
    </div>
  );
}