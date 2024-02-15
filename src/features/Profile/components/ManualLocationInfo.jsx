// icons
import marker from "../assets/icons/marker.svg";
import station from "../assets/icons/station.svg";
import getAddressText from "../utils/getAddressText";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const ManualLocationInfo = ({ userInfo }) => {
  const fields = [
    {
      info: getAddressText(userInfo?.manualLocation),
      label: "ঠিকানা",
      icon: marker,
    },
    {
      info: userInfo?.manualLocation?.station,
      label: "স্ট্যাশন",
      icon: station,
    },
  ];

  return (
    <InfoContainer
      type="ম্যানুয়াল লোকেশন"
      editRoute="/profile/edit/manual-location-info"
    >
      {fields.map(({ info, label, icon }, index) => (
        <Info key={index} info={info} label={label} icon={icon} />
      ))}
    </InfoContainer>
  );
};

export { ManualLocationInfo };
