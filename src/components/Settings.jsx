import { useState } from 'react';
import { BsGear } from 'react-icons/bs';
import ThemeSelector from './ThemeSelector';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const { setTheme } = useTheme();

  return (
    <div className="relative">
      <div
        onClick={() => setShowThemeSelector(!showThemeSelector)}
        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
      >
        <BsGear className="text-gray-600" />
        <span className="text-sm">Settings</span>
      </div>
      
      {showThemeSelector && (
        <ThemeSelector
          onSelect={setTheme}
          onClose={() => setShowThemeSelector(false)}
        />
      )}
    </div>
  );
}