import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow flex items-center justify-center p-4">
        <Calculator theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
}

export default App;