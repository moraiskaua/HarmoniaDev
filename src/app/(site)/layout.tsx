import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <section className="h-screen w-full bg-light dark:bg-dark dark:text-white">
        {children}
      </section>
    </>
  );
};

export default Layout;
