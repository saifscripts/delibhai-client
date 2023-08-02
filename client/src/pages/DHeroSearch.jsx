import { useParams } from 'react-router-dom';
import Title from '../components/ui/Title';
import Navbar from '../layouts/Navbar/Navbar';
import PageContainer from '../layouts/PageContainer';

export default function DHeroSearch() {
  const { vehicle } = useParams();
  console.log(vehicle);

  return (
    <div className='min-h-screen'>
      <Navbar />
      <PageContainer>
        <Title color='black' title='ডেলিভাই হিরো (সার্চ)' />
      </PageContainer>
    </div>
  );
}
