'use client';

import useTheme from '@/hooks/useTheme';
import Introduction from './components/Introduction';

const Home = () => {
  const { theme } = useTheme();

  return (
    <main className={`${theme} min-h-screen w-full`}>
      <Introduction />
    </main>
  );
};

export default Home;
