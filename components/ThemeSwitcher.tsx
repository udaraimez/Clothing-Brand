
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from './IconComponents';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center text-medium-gray dark:text-light-gray hover:text-brand-primary dark:hover:text-brand-primary hover:bg-light-border dark:hover:bg-dark-border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-bg dark:focus:ring-offset-dark-bg focus:ring-brand-primary"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6">
        <span
          className={`absolute inset-0 transition-all duration-300 transform ${
            theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
          }`}
        >
          <SunIcon />
        </span>
        <span
          className={`absolute inset-0 transition-all duration-300 transform ${
            theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        >
          <MoonIcon />
        </span>
      </div>
    </button>
  );
};

export default ThemeSwitcher;
