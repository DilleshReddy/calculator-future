import React from 'react';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`p-4 text-center ${theme === 'light' ? 'bg-white text-gray-600' : 'bg-gray-800 text-gray-300'}`}>
      <p>&copy; {new Date().getFullYear() + 27000} Advanced Mathematics Calculator</p>
    </footer>
  );
};

export default Footer;