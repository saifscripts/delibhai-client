import { useState } from 'react';
import { useParams } from 'react-router-dom';
import image from '../assets/bablo.png';
import car from '../assets/icons/car.svg';
import PageContainer from '../layouts/PageContainer';
import TopPanel from '../layouts/TopPanel';
import InfoCategories from './InfoCategories';
import Showcase from './Showcase';

export default function Profile() {
  const { id } = useParams();
  console.log(id);

  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <div>
      <TopPanel />
      <PageContainer>
        <div className='mx-auto'>
          <Showcase
            id={id}
            name='বাবলু খান'
            image={image}
            vehicle='কার'
            vehicleImage={car}
          />

          <InfoCategories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </PageContainer>
    </div>
  );
}
