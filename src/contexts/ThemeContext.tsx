'use client';
import { ReactNode, createContext, useEffect, useState } from 'react';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: '',
  toggleTheme: () => {},
});

type ThemeType = '' | 'dark';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('');

  const toggleTheme = () => {
    const newTheme = theme === '' ? 'dark' : '';
    setTheme(prevTheme => (prevTheme = newTheme));
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme((savedTheme as ThemeType) || '');
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
