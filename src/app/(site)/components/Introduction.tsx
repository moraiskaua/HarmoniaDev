import ThemeButton from '@/app/components/buttons/theme/ThemeButton';
import Layout from '../layout';

interface IntroductionProps {}

const Introduction = ({}: IntroductionProps) => {
  return (
    <Layout>
      <div className="h-full w-full flex justify-center items-center">
        <ThemeButton />
      </div>
    </Layout>
  );
};

export default Introduction;
