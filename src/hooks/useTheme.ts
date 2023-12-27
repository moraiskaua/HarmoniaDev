// src\hooks\useTheme.ts
import { ThemeContext } from '@/contexts/ThemeContext';
import { useContext } from 'react';

const useTheme = () => {
  if (typeof window === 'undefined') {
    return { theme: '', toggleTheme: () => {} };
  }

  return useContext(ThemeContext);
};

export default useTheme;
