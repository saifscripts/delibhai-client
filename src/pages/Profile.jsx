// others
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import ReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom';
import map from '../assets/map.png';
import { vehicles } from '../features/DHero/index';
import {
  Achievement,
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
            <InfoContainer type='ব্যক্তিগত তথ্য' edit>
              {personal.map(({ info, type, icon }, index) => (
                <Info key={index} info={info} type={type} icon={icon} />
              ))}
            </InfoContainer>

            <InfoContainer type='কন্টাক্ট ইনফো' edit>
              {contact.map(({ info, type, icon }, index) => (
                <Info key={index} info={info} type={type} icon={icon} />
              ))}
            </InfoContainer>

            <InfoContainer type='ঠিকানা' edit>
              {address.map(({ info, type, icon }, index) => (
                <Info key={index} info={info} type={type} icon={icon} />
              ))}
            </InfoContainer>
          </>
        )}

        {/* Vehicle Information */}
        {activeCategory === 2 && (
          <>
            <InfoContainer type='গাড়ির সাধারণ তথ্য' edit>
              {vehicle.map(({ info, type, icon }, index) => (
                <Info key={index} info={info} type={type} icon={icon} />
              ))}
            </InfoContainer>

            <InfoContainer type='গাড়ির মালিকানার তথ্য' edit>
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
            <InfoContainer type='সার্ভিস তথ্য' edit>
              {service.map(({ info, type, icon }, index) => (
                <Info key={index} info={info} type={type} icon={icon} />
              ))}
            </InfoContainer>
          </>
        )}

        {/* Location Information */}
        {activeCategory === 4 && (
          <>
            <InfoContainer type='GPS Location' edit>
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

            <InfoContainer type='ম্যানুয়াল লোকেশন' edit>
              {location.map(({ info, type, icon }, index) => (
                <Info key={index} info={info} type={type} icon={icon} />
              ))}
            </InfoContainer>
          </>
        )}

        {/* Video */}
        {activeCategory === 5 && (
          <>
            <InfoContainer type='ডিহিরোর অভিব্যক্তি' edit>
              <div className='w-full max-w-lg aspect-[1/1.8] bg-black flex justify-center items-center rounded-lg overflow-hidden'>
                <ReactPlayer
                  width='100%'
                  height='100%'
                  loop
                  url='https://youtu.be/_HgpFMdZ16c'
                />
              </div>
            </InfoContainer>
          </>
        )}

        {/* Review */}
        {activeCategory === 6 && (
          <>
            <InfoContainer type='রাইডার এক্টিভিটি'>
              <div className='flex gap-8 justify-center items-center'>
                <Achievement
                  title='21K রিভিও'
                  stat='4.3'
                  icon={<AiFillStar />}
                />
                <Achievement title='রাইড শেয়ার' stat='30K' />
                <Achievement title='রিসিভড কল' stat='35K' />
              </div>
            </InfoContainer>
            <InfoContainer type='রেটিং এবং রিভিও'></InfoContainer>
          </>
        )}
      </PageContainer>
    </div>
  );
}
