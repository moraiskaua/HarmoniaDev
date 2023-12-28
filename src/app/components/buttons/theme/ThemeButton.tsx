'use client';

import useTheme from '@/hooks/useTheme';
import ThemeIcon from './ThemeIcon';

interface ThemeButtonProps {
  background?: string;
}

const ThemeButton = ({ background }: ThemeButtonProps) => {
  const { toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <button onClick={handleClick}>
      <ThemeIcon background={background ?? '#252E27'} />
    </button>
  );
};

export default ThemeButton;
