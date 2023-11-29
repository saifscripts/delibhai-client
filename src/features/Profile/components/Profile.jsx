// others
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import map from "../../../assets/map.png";
import PageContainer from "../../../layouts/PageContainer";
import TopPanel from "../../../layouts/TopPanel";
import { vehicles } from "../../DHero/index";
import useUserInfo from "../hooks/useUserInfo";
import {
  Achievement,
  Address,
  AverageRating,
  ContactInfo,
  Info,
  InfoCategories,
  InfoContainer,
  RatingBars,
  Review,
  Showcase,
  VehiclePhotos,
} from "../index";
import PersonalInfo from "./PersonalInfo";

export const Profile = () => {
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState(1);
  const [userInfo, modifiedInfo] = useUserInfo(id);

  const { vehicle, owner, service, location, videoURL } = modifiedInfo;

  return (
    <div>
      {/* Top Panel */}
      <TopPanel />
      {/* Page Container */}
      <PageContainer>
        {/* Showcase */}
        <Showcase
          id={id}
          name={userInfo?.name}
          image={userInfo?.image}
          vehicle={userInfo?.vehicleType}
          vehicleImage={
            vehicles.find(({ title }) => title === userInfo?.vehicleType)?.icon
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
            <PersonalInfo />
            <ContactInfo />
            <Address />
          </>
        )}

        {/* Vehicle Information */}
        {activeCategory === 2 && (
          <>
            <InfoContainer
              type="গাড়ির সাধারণ তথ্য"
              fields={vehicle}
              editRoute="/profile/edit"
            >
              {vehicle.map(
                ({ info, label, icon, editOnly }, index) =>
                  editOnly || (
                    <Info key={index} info={info} label={label} icon={icon} />
                  )
              )}
            </InfoContainer>

            <InfoContainer
              type="গাড়ির মালিকানার তথ্য"
              fields={owner}
              editRoute="/profile/edit"
            >
              {owner.map(
                ({ info, label, icon, editOnly }, index) =>
                  editOnly || (
                    <Info key={index} info={info} label={label} icon={icon} />
                  )
              )}
            </InfoContainer>

            <InfoContainer type="গাড়ির ছবি">
              <VehiclePhotos photos={userInfo?.vehiclePhotos} />
            </InfoContainer>
          </>
        )}

        {/* Service Information */}
        {activeCategory === 3 && (
          <>
            <InfoContainer
              type="সার্ভিস তথ্য"
              fields={service}
              editRoute="/profile/edit"
            >
              {service.map(
                ({ info, label, icon, editOnly }, index) =>
                  editOnly || (
                    <Info key={index} info={info} label={label} icon={icon} />
                  )
              )}
            </InfoContainer>
          </>
        )}

        {/* Location Information */}
        {activeCategory === 4 && (
          <>
            <InfoContainer type="GPS Location" editRoute="/profile/edit">
              <div className="p-3 flex justify-center items-center gap-2 border border-light rounded-md mb-3 text-medium">
                <CiLocationOn />
                <p>
                  {"Heyako Bazar, Ramgarh Khagrachari Road, Fatikchhari, Chittagong, Bangladesh".slice(
                    0,
                    30
                  ) + " . . ."}
                </p>
              </div>
              <div className="border border-light rounded-md">
                <img src={map} alt="Map" className="w-full" />
              </div>
            </InfoContainer>

            <InfoContainer
              type="ম্যানুয়াল লোকেশন"
              fields={location}
              editRoute="/profile/edit"
            >
              {location.map(
                ({ info, label, icon, editOnly }, index) =>
                  editOnly || (
                    <Info key={index} info={info} label={label} icon={icon} />
                  )
              )}
            </InfoContainer>
          </>
        )}

        {/* Video */}
        {activeCategory === 5 && (
          <>
            <InfoContainer
              type="ডিহিরোর অভিব্যক্তি"
              fields={videoURL}
              editRoute="/profile/edit"
            >
              <div className="w-full max-w-lg aspect-[1/1.8] bg-black flex justify-center items-center rounded-lg overflow-hidden">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  loop
                  url={userInfo?.videoURL}
                />
              </div>
            </InfoContainer>
          </>
        )}

        {/* Review */}
        {activeCategory === 6 && (
          <>
            <InfoContainer type="রাইডার এক্টিভিটি">
              <div className="flex gap-8 justify-center items-center py-3 border-b border-light">
                <Achievement
                  title="21K রিভিও"
                  stat="4.3"
                  icon={<AiFillStar />}
                />
                <Achievement title="রাইড শেয়ার" stat="30K" />
                <Achievement title="রিসিভড কল" stat="35K" />
              </div>
            </InfoContainer>

            <InfoContainer type="রেটিং এবং রিভিও">
              <div className="grid grid-cols-[1fr_3fr] gap-8 items-center px-2 py-3 border-b border-light">
                <AverageRating rating="3.7" total="21,000" />
                <RatingBars percentages={[70, 20, 10, 3, 2]} />
              </div>
            </InfoContainer>

            <InfoContainer>
              <div className="grid gap-8 px-2 py-3">
                {userInfo?.reviews?.map(
                  ({ id, userImage, userName, rating, date, review }) => (
                    <Review
                      key={id}
                      id={id}
                      image={userImage}
                      name={userName}
                      rating={rating}
                      date={date}
                      review={review}
                    />
                  )
                )}
              </div>
            </InfoContainer>
          </>
        )}
      </PageContainer>
    </div>
  );
};
