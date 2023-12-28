import useTheme from '@/hooks/useTheme';

interface IntroductionProps {}

const Introduction = ({}: IntroductionProps) => {
  const { toggleTheme } = useTheme();

  return (
    <div className="h-screen w-full flex justify-center items-center bg-light dark:bg-dark dark:text-white">
      <button onClick={toggleTheme}>Alterar tema</button>
    </div>
  );
};

export default Introduction;
