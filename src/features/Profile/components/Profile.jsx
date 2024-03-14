// others
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import MiniContainer from "../../../layouts/MiniContainer";
import profileSchema from "../data/profileSchema";
import useUserInfo from "../hooks/useUserInfo";
import {
  Achievement,
  AverageRating,
  Categories,
  Field,
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
  const { isLoading, userInfo } = useUserInfo(id);
  const { currentUser } = useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <MiniContainer>
      <Showcase userInfo={userInfo} />

      <Categories
        userInfo={userInfo}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {profileSchema[activeCategory]?.map((item) => (
        <InfoContainer
          key={item.category}
          category={item.category}
          editRoute={id === currentUser?._id && item.editRoute}
        >
          {item.fields.map(
            ({ dataKey, label, icon, dataModifier, isPrivate }) => {
              const data = userInfo[dataKey];
              let fieldValue;

              if (data) {
                fieldValue = dataModifier ? dataModifier(data) : data;
              } else {
                fieldValue = undefined;
              }

              const isHidden =
                (isPrivate || !fieldValue) && id !== currentUser?._id;

              return (
                !isHidden && (
                  <Field
                    key={dataKey}
                    value={fieldValue}
                    label={label}
                    icon={icon}
                  />
                )
              );
            }
          )}
        </InfoContainer>
      ))}

      {activeCategory === "vehicleInfo" && (
        <VehiclePhotos userInfo={userInfo} />
      )}

      {activeCategory === "locationInfo" && <GPSLocationInfo />}

      {activeCategory === "videoInfo" && (
        <VideoInfo userId={id} videoURL={userInfo?.videoURL} />
      )}

      {activeCategory === "review" && (
        <>
          <InfoContainer category="রাইডার এক্টিভিটি">
            <div className="flex gap-8 justify-center items-center py-3 border-b border-light">
              <Achievement title="21K রিভিও" stat="4.3" icon={<AiFillStar />} />
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
    </MiniContainer>
  );
};
