// icons
import vehicleName from "../assets/icons/vehicle--name.svg";
import vehicleBrand from "../assets/icons/vehicle-brand.svg";
import vehicleModel from "../assets/icons/vehicle-model.svg";
import vehicleNumber from "../assets/icons/vehicle-number.svg";
import vehicleType from "../assets/icons/vehicle.svg";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const VehicleInfo = ({ userInfo }) => {
  const fields = [
    {
      info: userInfo?.vehicleType,
      label: "গাড়ির ধরণ",
      icon: vehicleType,
    },
    {
      info: userInfo?.vehicleBrand,
      label: "গাড়ির ব্র্যান্ড",
      icon: vehicleBrand,
    },
    {
      info: userInfo?.vehicleModel,
      label: "গাড়ির মডেল",
      icon: vehicleModel,
    },
    {
      info: userInfo?.vehicleNumber,
      label: "গাড়ির নম্বর",
      icon: vehicleNumber,
    },
    {
      info: userInfo?.vehicleName,
      label: "গাড়ির নাম",
      icon: vehicleName,
    },
  ];

  return (
    <InfoContainer
      type="গাড়ির সাধারণ তথ্য"
      editRoute="/profile/edit/vehicle-info"
    >
      {fields.map(({ info, label, icon }, index) => (
        <Info key={index} info={info} label={label} icon={icon} />
      ))}
    </InfoContainer>
  );
};

export { VehicleInfo };
