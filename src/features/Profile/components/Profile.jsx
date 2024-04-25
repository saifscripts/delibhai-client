// others
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import MiniContainer from "../../../layouts/MiniContainer";
import { useAuth } from "../../Authentication/contexts/AuthContext";
import { ProfileHeader } from "../../ProfileHeader";
import profileSchema from "../data/profileSchema";
import useUserInfo from "../hooks/useUserInfo";
import Achievement from "./Achievement";
import AverageRating from "./AverageRating";
import Categories from "./Categories";
import Field from "./Field";
import GPSLocationInfo from "./GPSLocationInfo";
import InfoContainer from "./InfoContainer";
import RatingBars from "./RatingBars";
import Review from "./Review";
import VehiclePhotos from "./VehiclePhotos";
import VideoInfo from "./VideoInfo";

export default function Profile() {
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState("generalInfo");
  const { isLoading, userInfo } = useUserInfo(id);
  const { currentUser } = useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <MiniContainer>
      <ProfileHeader userInfo={userInfo} />

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
            },
          )}
        </InfoContainer>
      ))}

      {activeCategory === "vehicleInfo" && (
        <VehiclePhotos userInfo={userInfo} />
      )}

      {activeCategory === "locationInfo" && <GPSLocationInfo id={id} />}

      {activeCategory === "videoInfo" && (
        <VideoInfo userId={id} videoURL={userInfo?.videoURL} />
      )}

      {activeCategory === "review" && (
        <>
          <InfoContainer category="রাইডার এক্টিভিটি">
            <div className="border-light flex items-center justify-center gap-8 border-b py-3">
              <Achievement title="21K রিভিও" stat="4.3" icon={<AiFillStar />} />
              <Achievement title="রাইড শেয়ার" stat="30K" />
              <Achievement title="রিসিভড কল" stat="35K" />
            </div>
          </InfoContainer>

          <InfoContainer category="রেটিং এবং রিভিও">
            <div className="border-light grid grid-cols-[1fr_3fr] items-center gap-8 border-b px-2 py-3">
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
                ),
              )}
            </div>
          </InfoContainer>
        </>
      )}
    </MiniContainer>
  );
}
