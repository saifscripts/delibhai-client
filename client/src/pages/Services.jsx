import Categories from '../components/ui/Categories';
import Title from '../components/ui/Title';
import services from '../data/services';
import Navbar from '../layouts/Navbar/Navbar';
import PageContainer from '../layouts/PageContainer';

const Services = () => {
  return (
    <div className='bg-secondary min-h-screen'>
      <Navbar bgColor='secondary' />
      <PageContainer>
        <Title title='ডেলিভাই সার্ভিস সমূহ' />
        <Categories categories={services} />
      </PageContainer>
    </div>
  );
};

export default Services;
