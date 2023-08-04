import { useState } from 'react';
import { useParams } from 'react-router-dom';
import image from '../assets/bablo.png';
import car from '../assets/icons/car.svg';
import PageContainer from '../layouts/PageContainer';
import TopPanel from '../layouts/TopPanel';
import Info from './Info';
import InfoCategories from './InfoCategories';
import InfoContainer from './InfoContainer';
import Showcase from './Showcase';

import user from '../assets/icons/user.svg';

const info = {
  personal: [
    { info: 'এয়াকুব বাবলু', type: 'নিজের নাম', icon: user },
    { info: 'মোঃ ইউসুফ আলী', type: 'পিতার নাম', icon: user },
    { info: 'পুরুষ', type: 'লিঙ্গ', icon: user },
    { info: 'এ+', type: 'রক্তের গ্রুপ', icon: user },
    { info: '২৯ বছর', type: 'বয়স', icon: user },
    { info: '1023274465', type: 'জন্মনিবন্ধন/NID নম্বর', icon: user },
  ],
};

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

          {activeCategory === 1 && (
            <>
              <InfoContainer type='ব্যক্তিগত তথ্য'>
                {info.personal.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>

              <InfoContainer type='কন্টাক্ট ইনফো'>
                {info.personal.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>

              <InfoContainer type='ঠিকানা'>
                {info.personal.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>
            </>
          )}

          {activeCategory === 2 && (
            <>
              <InfoContainer type='গাড়ির সাধারণ তথ্য'>
                {info.personal.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>

              <InfoContainer type='গাড়ির মালিকানার তথ্য'>
                {info.personal.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>

              <InfoContainer type='গাড়ির ছবি'></InfoContainer>
            </>
          )}

          {activeCategory === 3 && (
            <>
              <InfoContainer type='সার্ভিস তথ্য'>
                {info.personal.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>
            </>
          )}

          {activeCategory === 4 && (
            <>
              <InfoContainer type='GPS Location'>
                {info.personal.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>

              <InfoContainer type='ম্যানুয়াল লোকেশন'>
                {info.personal.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>
            </>
          )}
        </div>
      </PageContainer>
    </div>
  );
}
