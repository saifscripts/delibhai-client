import Categories from '../components/ui/Categories';
import Title from '../components/ui/Title';
import vehicles from '../data/vehicles';
import Navbar from '../layouts/Navbar/Navbar';
import PageContainer from '../layouts/PageContainer';

export default function DHero() {
  return (
    <div className='bg-secondary min-h-screen'>
      <Navbar bgColor='secondary' />
      <PageContainer>
        <Title color='white' title='ডেলিভাই বাহন' />
        <Categories categories={vehicles} />
      </PageContainer>
    </div>
  );
}
