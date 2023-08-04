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

// icons
import age from '../assets/icons/profile/age.svg';
import bloodGroup from '../assets/icons/profile/blood-group.svg';
import clock from '../assets/icons/profile/clock.svg';
import email from '../assets/icons/profile/email.svg';
import facebook from '../assets/icons/profile/facebook.svg';
import father from '../assets/icons/profile/father.svg';
import marker from '../assets/icons/profile/marker.svg';
import nid from '../assets/icons/profile/NID.svg';
import phone from '../assets/icons/profile/phone.svg';
import serviceArea from '../assets/icons/profile/service-area.svg';
import serviceType from '../assets/icons/profile/service-type.svg';
import sex from '../assets/icons/profile/sex.svg';
import station from '../assets/icons/profile/station.svg';
import steering from '../assets/icons/profile/steering.svg';
import user from '../assets/icons/profile/user.svg';
import vehicleName from '../assets/icons/profile/vehicle--name.svg';
import vehicleBrand from '../assets/icons/profile/vehicle-brand.svg';
import vehicleModel from '../assets/icons/profile/vehicle-model.svg';
import vehicleNumber from '../assets/icons/profile/vehicle-number.svg';
import vehicleType from '../assets/icons/profile/vehicle.svg';

const info = {
  personal: [
    { info: 'এয়াকুব বাবলু', type: 'নিজের নাম', icon: user },
    { info: 'মোঃ ইউসুফ আলী', type: 'পিতার নাম', icon: father },
    { info: 'পুরুষ', type: 'লিঙ্গ', icon: sex },
    { info: 'এ+', type: 'রক্তের গ্রুপ', icon: bloodGroup },
    { info: '২৯ বছর', type: 'বয়স', icon: age },
    { info: '1023274465', type: 'জন্মনিবন্ধন/NID নম্বর', icon: nid },
  ],
  contact: [
    { info: 'এয়াকুব বাবলু', type: 'মোবাইল নম্বর', icon: phone },
    { info: 'মোঃ ইউসুফ আলী', type: 'বিকল্প মোবাইল নম্বর', icon: phone },
    { info: 'পুরুষ', type: 'ই-মেইল', icon: email },
    { info: 'এ+', type: 'ফেইসবুক লিংক', icon: facebook },
  ],
  address: [
    { info: 'এয়াকুব বাবলু', type: 'বর্তমান ঠিকানা', icon: marker },
    { info: 'মোঃ ইউসুফ আলী', type: 'স্থায়ী ঠিকানা', icon: marker },
  ],
  vehicle: [
    { info: 'এয়াকুব বাবলু', type: 'গাড়ির ধরণ', icon: vehicleType },
    { info: 'মোঃ ইউসুফ আলী', type: 'গাড়ির ব্র্যান্ড', icon: vehicleBrand },
    { info: 'পুরুষ', type: 'গাড়ির মডেল', icon: vehicleModel },
    { info: 'এ+', type: 'গাড়ির নম্বর', icon: vehicleNumber },
    { info: '২৯ বছর', type: 'গাড়ির নাম', icon: vehicleName },
  ],
  owner: [
    { info: 'এয়াকুব বাবলু', type: 'কোম্পানির নাম', icon: user },
    { info: 'মোঃ ইউসুফ আলী', type: 'ঠিকানা', icon: marker },
    { info: 'পুরুষ', type: 'মোবাইল', icon: phone },
    { info: 'এ+', type: 'ই-মেইল', icon: email },
  ],
  service: [
    { info: 'এয়াকুব বাবলু', type: 'গাড়ির ব্যবহার', icon: steering },
    { info: 'মোঃ ইউসুফ আলী', type: 'গাড়ির সেবা', icon: serviceType },
    { info: 'পুরুষ', type: 'প্রধান স্ট্যাশন', icon: station },
    { info: 'এ+', type: 'সার্ভিস প্রদানের এলাকা সমূহ', icon: serviceArea },
    { info: 'এ+', type: 'সার্ভিস প্রদানের সময়', icon: clock },
  ],
  location: [
    { info: 'এয়াকুব বাবলু', type: 'বিভাগ', icon: marker },
    { info: 'মোঃ ইউসুফ আলী', type: 'জেলা', icon: marker },
    { info: 'পুরুষ', type: 'উপজেলা/পৌরসভা', icon: marker },
    { info: 'এ+', type: 'থানা', icon: marker },
    { info: 'এ+', type: 'ইউনিয়ন/সিটি কর্পোরেশন', icon: marker },
    { info: 'এ+', type: 'পোস্ট অফিস', icon: marker },
    { info: 'এ+', type: 'পোস্ট কোড', icon: marker },
    { info: 'এ+', type: 'গ্রাম/মহল্লা', icon: marker },
    { info: 'এ+', type: 'স্ট্যাশন', icon: marker },
  ],
};

const { personal, contact, address, vehicle, owner, service, location } = info;

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
                {personal.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>

              <InfoContainer type='কন্টাক্ট ইনফো'>
                {contact.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>

              <InfoContainer type='ঠিকানা'>
                {address.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>
            </>
          )}

          {activeCategory === 2 && (
            <>
              <InfoContainer type='গাড়ির সাধারণ তথ্য'>
                {vehicle.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>

              <InfoContainer type='গাড়ির মালিকানার তথ্য'>
                {owner.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>

              <InfoContainer type='গাড়ির ছবি'></InfoContainer>
            </>
          )}

          {activeCategory === 3 && (
            <>
              <InfoContainer type='সার্ভিস তথ্য'>
                {service.map(({ info, type, icon }, index) => (
                  <Info key={index} info={info} type={type} icon={icon} />
                ))}
              </InfoContainer>
            </>
          )}

          {activeCategory === 4 && (
            <>
              <InfoContainer type='GPS Location'></InfoContainer>

              <InfoContainer type='ম্যানুয়াল লোকেশন'>
                {location.map(({ info, type, icon }, index) => (
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
