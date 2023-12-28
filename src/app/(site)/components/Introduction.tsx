import ThemeButton from '@/app/components/buttons/theme/ThemeButton';

interface IntroductionProps {}

const Introduction = ({}: IntroductionProps) => {
  return (
    <section className="h-screen w-full flex justify-center items-center bg-light dark:bg-dark dark:text-white">
      <ThemeButton />
    </section>
  );
};

export default Introduction;
