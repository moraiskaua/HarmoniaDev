import useTheme from '@/hooks/useTheme';
import ThemeIcon from './ThemeIcon';

interface ThemeButtonProps {}

const ThemeButton = ({}: ThemeButtonProps) => {
  const { toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <button onClick={handleClick}>
      <ThemeIcon />
    </button>
  );
};

export default ThemeButton;
