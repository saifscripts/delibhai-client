import Categories from '../components/ui/Categories';
import Title from '../components/ui/Title';
import Navbar from '../layouts/Navbar/Navbar';
import PageContainer from '../layouts/PageContainer';

import dhero from '../assets/icons/bike.svg';
import bloodlagbe from '../assets/icons/bloodlagbe.svg';
import delifood from '../assets/icons/delifood.svg';
import dlabour from '../assets/icons/dlabour.svg';
import dsend from '../assets/icons/dsend.svg';
import dshop from '../assets/icons/dshop.svg';
import gaslagbe from '../assets/icons/gaslagbe.svg';

const services = [
  { id: 1, icon: dhero, title: 'dHero', to: 'dhero' },
  { id: 2, icon: dlabour, title: 'dLabour', to: 'dlabour' },
  { id: 3, icon: dsend, title: 'dSend', to: 'dsend' },
  { id: 4, icon: dshop, title: 'dShop', to: 'dshop' },
  { id: 5, icon: bloodlagbe, title: 'Blood Lagbe?', to: 'bloodlagbe' },
  { id: 6, icon: gaslagbe, title: 'Gas Lagbe?', to: 'gaslagbe' },
  { id: 7, icon: delifood, title: 'delifood', to: 'delifood' },
];

const Services = () => {
  return (
    <div className='bg-secondary min-h-screen'>
      <Navbar bgColor='secondary' />
      <PageContainer>
        <Title color='white' title='ডেলিভাই সার্ভিস সমূহ' />
        <Categories categories={services} />
      </PageContainer>
    </div>
  );
};

export default Services;
