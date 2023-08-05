// icons
import nid from '../assets/icons/profile/NID.svg';
import age from '../assets/icons/profile/age.svg';
import bloodGroup from '../assets/icons/profile/blood-group.svg';
import clock from '../assets/icons/profile/clock.svg';
import email from '../assets/icons/profile/email.svg';
import facebook from '../assets/icons/profile/facebook.svg';
import father from '../assets/icons/profile/father.svg';
import marker from '../assets/icons/profile/marker.svg';
import phone from '../assets/icons/profile/phone.svg';
import serviceArea from '../assets/icons/profile/service-area.svg';
import serviceType from '../assets/icons/profile/service-type.svg';
import sex from '../assets/icons/profile/sex.svg';
import station from '../assets/icons/profile/station.svg';
import steering from '../assets/icons/profile/steering.svg';
import person from '../assets/icons/profile/user.svg';
import vehicleName from '../assets/icons/profile/vehicle--name.svg';
import vehicleBrand from '../assets/icons/profile/vehicle-brand.svg';
import vehicleModel from '../assets/icons/profile/vehicle-model.svg';
import vehicleNumber from '../assets/icons/profile/vehicle-number.svg';
import vehicleType from '../assets/icons/profile/vehicle.svg';

// others
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import heros from '../data/heros';
import vehicles from '../data/vehicles';
import PageContainer from '../layouts/PageContainer';
import TopPanel from '../layouts/TopPanel';
import convertNumber from '../utils/convertNumber';
import { getServiceTime } from '../utils/convertTime';
import Info from './Info';
import InfoCategories from './InfoCategories';
import InfoContainer from './InfoContainer';
import Showcase from './Showcase';

export default function Profile() {
  const { id } = useParams();

  const [activeCategory, setActiveCategory] = useState(1);
  const [user, setUser] = useState({});

  console.log(user);

  useEffect(() => setUser(heros.find((hero) => hero.id === id)), [id]);

  const info = {
    personal: [
      { info: user.name, type: 'নিজের নাম', icon: person },
      { info: user.father, type: 'পিতার নাম', icon: father },
      { info: user.sex, type: 'লিঙ্গ', icon: sex },
      { info: user.bloodGroup, type: 'রক্তের গ্রুপ', icon: bloodGroup },
      { info: `${convertNumber(user.age)} বছর`, type: 'বয়স', icon: age },
      { info: user.nid, type: 'জন্মনিবন্ধন/NID নম্বর', icon: nid },
    ],
    contact: [
      { info: user.mobile1, type: 'মোবাইল নম্বর', icon: phone },
      { info: user.mobile2, type: 'বিকল্প মোবাইল নম্বর', icon: phone },
      { info: user.email, type: 'ই-মেইল', icon: email },
      { info: user.facebook, type: 'ফেইসবুক লিংক', icon: facebook },
    ],
    address: [
      { info: user.presentAddress, type: 'বর্তমান ঠিকানা', icon: marker },
      { info: user.permanentAddress, type: 'স্থায়ী ঠিকানা', icon: marker },
    ],
    vehicle: [
      { info: user.vehicleType, type: 'গাড়ির ধরণ', icon: vehicleType },
      { info: user.vehicleBrand, type: 'গাড়ির ব্র্যান্ড', icon: vehicleBrand },
      { info: user.vehicleModel, type: 'গাড়ির মডেল', icon: vehicleModel },
      { info: user.vehicleNumber, type: 'গাড়ির নম্বর', icon: vehicleNumber },
      { info: user.vehicleName, type: 'গাড়ির নাম', icon: vehicleName },
    ],
    owner: [
      { info: user.ownerName, type: 'কোম্পানির নাম', icon: person },
      { info: user.ownerAddress, type: 'ঠিকানা', icon: marker },
      { info: user.ownerMobile, type: 'মোবাইল', icon: phone },
      { info: user.ownerEmail, type: 'ই-মেইল', icon: email },
    ],
    service: [
      { info: user.serviceUsage, type: 'গাড়ির ব্যবহার', icon: steering },
      { info: user.serviceType, type: 'গাড়ির সেবা', icon: serviceType },
      { info: user.mainStation, type: 'প্রধান স্ট্যাশন', icon: station },
      {
        info: user.serviceAreas?.join(', '),
        type: 'সার্ভিস প্রদানের এলাকা সমূহ',
        icon: serviceArea,
      },
      {
        info: getServiceTime(user.serviceTime),
        type: 'সার্ভিস প্রদানের সময়',
        icon: clock,
      },
    ],
    location: [
      { info: user.location?.division, type: 'বিভাগ', icon: marker },
      { info: user.location?.district, type: 'জেলা', icon: marker },
      { info: user.location?.subDistrict, type: 'উপজেলা/পৌরসভা', icon: marker },
      { info: user.location?.thana, type: 'থানা', icon: marker },
      {
        info: user.location?.union,
        type: 'ইউনিয়ন/সিটি কর্পোরেশন',
        icon: marker,
      },
      { info: user.location?.PO, type: 'পোস্ট অফিস', icon: marker },
      { info: user.location?.zip, type: 'পোস্ট কোড', icon: marker },
      { info: user.location?.village, type: 'গ্রাম/মহল্লা', icon: marker },
      { info: user.location?.station, type: 'স্ট্যাশন', icon: marker },
    ],
  };

  const { personal, contact, address, vehicle, owner, service, location } =
    info;

  return (
    <div>
      <TopPanel />
      <PageContainer>
        <div className='mx-auto'>
          <Showcase
            id={id}
            name={user.name}
            image={user.image}
            vehicle={user.vehicleType}
            vehicleImage={
              vehicles.find(({ title }) => title === user.vehicleType)?.icon
            }
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
