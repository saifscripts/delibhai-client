// icons
import { useParams } from "react-router-dom";
import vehicleName from "../assets/icons/vehicle--name.svg";
import vehicleBrand from "../assets/icons/vehicle-brand.svg";
import vehicleModel from "../assets/icons/vehicle-model.svg";
import vehicleNumber from "../assets/icons/vehicle-number.svg";
import vehicleType from "../assets/icons/vehicle.svg";
import useUserInfo from "../hooks/useUserInfo";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const VehicleInfo = () => {
  const { id } = useParams();
  const [userInfo] = useUserInfo(id);

  const fields = [
    {
      type: "select",
      options: ["বাইক", "কার", "সিএনজি", "টমটম"],
      info: userInfo?.vehicleType,
      label: "গাড়ির ধরণ",
      icon: vehicleType,
    },
    {
      type: "text",
      info: userInfo?.vehicleBrand,
      label: "গাড়ির ব্র্যান্ড",
      icon: vehicleBrand,
    },
    {
      type: "text",
      info: userInfo?.vehicleModel,
      label: "গাড়ির মডেল",
      icon: vehicleModel,
    },
    {
      type: "text",
      info: userInfo?.vehicleNumber,
      label: "গাড়ির নম্বর",
      icon: vehicleNumber,
    },
    {
      type: "text",
      info: userInfo?.vehicleName,
      label: "গাড়ির নাম",
      icon: vehicleName,
    },
  ];

  return (
    <InfoContainer
      type="গাড়ির সাধারণ তথ্য"
      fields={fields}
      editRoute="/profile/edit/vehicle-info"
    >
      {fields.map(
        ({ info, label, icon, editOnly }, index) =>
          editOnly || <Info key={index} info={info} label={label} icon={icon} />
      )}
    </InfoContainer>
  );
};

export { VehicleInfo };
