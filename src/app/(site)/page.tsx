'use client';
import useTheme from '@/hooks/useTheme';
import Teste from '../teste';

const Home = () => {
  const { theme } = useTheme();
  return (
    <main className={`${theme} min-h-screen w-full`}>
      <Teste />
    </main>
  );
};

export default Home;
