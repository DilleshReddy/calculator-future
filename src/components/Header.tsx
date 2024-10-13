import React from 'react';
import { Sun, Moon, Calculator } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className={`p-4 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Calculator size={32} />
          <h1 className="text-2xl font-bold">Futuristic Calculator</h1>
        </div>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${
            theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-700 text-white'
          }`}
        >
          {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;