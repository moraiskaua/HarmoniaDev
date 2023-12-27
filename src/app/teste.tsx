import useTheme from '@/hooks/useTheme';

const Teste = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="h-full w-full bg-white dark:bg-gray-900 dark:text-white">
      <button onClick={toggleTheme}>Alterar tema</button>
    </div>
  );
};

export default Teste;
