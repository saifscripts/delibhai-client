// others
import { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { useParams } from 'react-router-dom';
import map from '../assets/map.png';
import { vehicles } from '../features/DHero/index';
import {
  Info,
  InfoCategories,
  InfoContainer,
  Showcase,
  VehiclePhotos,
  useUserInfo,
} from '../features/Profile/index';
import PageContainer from '../layouts/PageContainer';
import TopPanel from '../layouts/TopPanel';

export default function Profile() {
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState(1);
  const [userInfo, modifiedInfo] = useUserInfo(id);

  const { personal, contact, address, vehicle, owner, service, location } =
    modifiedInfo;

  return (
    <div>
      {/* Top Panel */}
      <TopPanel />
      {/* Page Container */}
      <PageContainer>
        {/* Showcase */}
        <Showcase
          id={id}
          name={userInfo.name}
          image={userInfo.image}
          vehicle={userInfo.vehicleType}
          vehicleImage={
            vehicles.find(({ title }) => title === userInfo.vehicleType)?.icon
          }
        />

        {/* Info Categories */}
        <InfoCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* General Information */}
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

        {/* Vehicle Information */}
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

            <InfoContainer type='গাড়ির ছবি'>
              <VehiclePhotos photos={userInfo?.vehiclePhotos} />
            </InfoContainer>
          </>
        )}

        {/* Service Information */}
        {activeCategory === 3 && (
          <>
            <InfoContainer type='সার্ভিস তথ্য'>
              {service.map(({ info, type, icon }, index) => (
                <Info key={index} info={info} type={type} icon={icon} />
              ))}
            </InfoContainer>
          </>
        )}

        {/* Location Information */}
        {activeCategory === 4 && (
          <>
            <InfoContainer type='GPS Location'>
              <div className='p-3 flex justify-center items-center gap-2 border border-light rounded-md mb-3 text-medium'>
                <CiLocationOn />
                <p>
                  {'Heyako Bazar, Ramgarh Khagrachari Road, Fatikchhari, Chittagong, Bangladesh'.slice(
                    0,
                    30
                  ) + ' . . .'}
                </p>
              </div>
              <div className='border border-light rounded-md'>
                <img src={map} alt='Map' className='w-full' />
              </div>
            </InfoContainer>

            <InfoContainer type='ম্যানুয়াল লোকেশন'>
              {location.map(({ info, type, icon }, index) => (
                <Info key={index} info={info} type={type} icon={icon} />
              ))}
            </InfoContainer>
          </>
        )}
      </PageContainer>
    </div>
  );
}
