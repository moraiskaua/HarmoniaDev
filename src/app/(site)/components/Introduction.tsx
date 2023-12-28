import ThemeButton from '@/app/components/buttons/ThemeButton';

interface IntroductionProps {}

const Introduction = ({}: IntroductionProps) => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-light dark:bg-dark dark:text-white">
      <ThemeButton />
    </div>
  );
};

export default Introduction;
