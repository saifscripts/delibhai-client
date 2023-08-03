import { useParams } from 'react-router-dom';
import image from '../assets/bablo.png';
import car from '../assets/icons/car.svg';
import PageContainer from '../layouts/PageContainer';
import TopPanel from '../layouts/TopPanel';
import Showcase from './Showcase';

export default function Profile() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <TopPanel />
      <PageContainer>
        <Showcase
          id={id}
          name='বাবলু খান'
          image={image}
          vehicle='কার'
          vehicleImage={car}
        />
      </PageContainer>
    </div>
  );
}
