import { themes } from '../context/ThemeContext';

export default function ThemeSelector({ onSelect, onClose }) {
  const themeColors = [
    { name: 'Default', value: themes.default },
    { name: 'Lavender', value: themes.lavender },
    { name: 'Mint', value: themes.mint },
    { name: 'Peach', value: themes.peach },
    { name: 'Sky', value: themes.sky },
    { name: 'Rose', value: themes.rose },
  ];

  return (
    <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-lg p-4 w-64">
      <h3 className="text-sm font-medium mb-3">Choose Theme</h3>
      <div className="grid grid-cols-2 gap-2">
        {themeColors.map((color) => (
          <button
            key={color.name}
            onClick={() => {
              onSelect(color.value);
              onClose();
            }}
            className={`p-2 rounded-lg text-sm ${color.value.bg} hover:opacity-80 transition-opacity`}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}