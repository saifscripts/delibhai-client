import { vehicles } from '../features/DHero/index';
import Categories from '../layouts/Categories';
import Navbar from '../layouts/Navbar/Navbar';
import PageContainer from '../layouts/PageContainer';
import Title from '../layouts/Title';

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
