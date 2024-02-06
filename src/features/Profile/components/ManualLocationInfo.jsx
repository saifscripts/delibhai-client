// icons
import { useParams } from "react-router-dom";
import marker from "../assets/icons/marker.svg";
import station from "../assets/icons/station.svg";
import useUserInfo from "../hooks/useUserInfo";
import getAddressText from "../utils/getAddressText";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const ManualLocationInfo = () => {
  const { id } = useParams();
  const [userInfo] = useUserInfo(id);

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
      fields={fields}
      editRoute="/profile/edit/manual-location-info"
    >
      {fields.map(({ info, label, icon }, index) => (
        <Info key={index} info={info} label={label} icon={icon} />
      ))}
    </InfoContainer>
  );
};

export { ManualLocationInfo };
