import { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAuthUser } from "../../../../redux/features/auth/authSlice";
import UserContext from "../../contexts/UserContext";
import profileSchema from "../../data/profileSchema";
import { GPSLocation } from "../GPSLocation";
import { ManualLocation } from "../ManualLocation";
import { Ratings } from "../Ratings";
import { Reviews } from "../Reviews";
import { RiderActivity } from "../RiderActivity";
import { VehiclePhotos } from "../VehiclePhotos";
import { Video } from "../Video";
import Field from "./Field";
import InfoContainer from "./InfoContainer";

export default function ProfileInfo() {
  const { category = "general", id } = useParams();
  const { userInfo } = useContext(UserContext);
  const user = useSelector(getAuthUser);

  return (
    <div className="pb-20">
      {profileSchema[category]?.map((item) => (
        <InfoContainer
          key={item.category}
          category={item.category}
          editModal={id === user?._id && item.editModal}
        >
          {item?.fields?.map(
            ({ dataKey, label, icon, dataModifier, isPrivate }) => {
              if (dataKey === "vehiclePhotos") {
                return <VehiclePhotos key={dataKey} />;
              }

              if (dataKey === "manualLocation") {
                return <ManualLocation key={dataKey} />;
              }

              if (dataKey === "liveLocation") {
                return <GPSLocation key={dataKey} />;
              }

              if (dataKey === "videoURL") {
                return <Video key={dataKey} />;
              }

              if (dataKey === "riderActivity") {
                return <RiderActivity key={dataKey} />;
              }

              if (dataKey === "ratings") {
                return <Ratings key={dataKey} />;
              }

              if (dataKey === "reviews") {
                return <Reviews key={dataKey} />;
              }

              const data = userInfo[dataKey];
              let fieldValue;

              if (data) {
                fieldValue = dataModifier ? dataModifier(data) : data;
              } else {
                fieldValue = undefined;
              }

              const isHidden = (isPrivate || !fieldValue) && id !== user?._id;

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
    </div>
  );
}
