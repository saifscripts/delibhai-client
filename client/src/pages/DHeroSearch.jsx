import { useParams } from 'react-router-dom';
import Title from '../components/ui/Title';
import PageContainer from '../layouts/PageContainer';
import TopPanel from '../layouts/TopPanel';

export default function DHeroSearch() {
  const { vehicle } = useParams();
  console.log(vehicle);

  return (
    <div className='min-h-screen'>
      <TopPanel />
      <PageContainer>
        <Title color='black' title='ডেলিভাই হিরো (সার্চ)' />
      </PageContainer>
    </div>
  );
}
