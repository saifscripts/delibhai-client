// others
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import vehicles from "../../../data/vehicles";
import PageContainer from "../../../layouts/PageContainer";
import TopPanel from "../../../layouts/TopPanel";
import profileSchema from "../data/profileSchema";
import useUserInfo from "../hooks/useUserInfo";
import {
  Achievement,
  AverageRating,
  Field,
  InfoCategories,
  InfoContainer,
  RatingBars,
  Review,
  Showcase,
  VehiclePhotos,
  VideoInfo,
} from "../index";
import GPSLocationInfo from "./GPSLocationInfo";

export const Profile = () => {
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState("generalInfo");
  const [userInfo] = useUserInfo(id);

  return (
    <>
      <TopPanel />
      <PageContainer>
        <Showcase
          id={id}
          name={userInfo?.name}
          image={userInfo?.image}
          vehicleType={userInfo?.vehicleType}
          vehicleImage={
            vehicles.find(({ title }) => title === userInfo?.vehicleType)?.icon
          }
          serviceUsage={userInfo?.serviceUsage}
        />

        <InfoCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {profileSchema[activeCategory]?.map((item) => (
          <InfoContainer
            key={item.category}
            category={item.category}
            editRoute={item.editRoute}
          >
            {item.fields.map(({ dataKey, label, icon, dataModifier }) => {
              const data = userInfo[dataKey];
              return (
                <Field
                  key={dataKey}
                  value={dataModifier ? dataModifier(data) : data}
                  label={label}
                  icon={icon}
                />
              );
            })}
          </InfoContainer>
        ))}

        {/* Vehicle Information */}
        {activeCategory === "vehicleInfo" && (
          <VehiclePhotos userInfo={userInfo} />
        )}

        {/* Location Information */}
        {activeCategory === "locationInfo" && <GPSLocationInfo />}

        {/* Video */}
        {activeCategory === "videoInfo" && (
          <VideoInfo videoURL={userInfo?.videoURL} />
        )}

        {/* Review */}
        {activeCategory === "review" && (
          <>
            <InfoContainer category="রাইডার এক্টিভিটি">
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

            <InfoContainer category="রেটিং এবং রিভিও">
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
    </>
  );
};
