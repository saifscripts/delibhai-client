// icons
import email from "../assets/icons/email.svg";
import marker from "../assets/icons/marker.svg";
import phone from "../assets/icons/phone.svg";
import person from "../assets/icons/user.svg";
import getAddressText from "../utils/getAddressText";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const OwnerInfo = ({ userInfo }) => {
  const fields = [
    {
      info: userInfo?.ownerName,
      label: "কোম্পানি/মালিকের নাম",
      icon: person,
    },
    {
      info: getAddressText(userInfo?.ownerAddress),
      label: "স্থায়ী ঠিকানা",
      icon: marker,
    },
    {
      info: userInfo?.ownerMobile,
      label: "মোবাইল",
      icon: phone,
    },
    {
      info: userInfo?.ownerEmail,
      label: "ই-মেইল",
      icon: email,
    },
  ];
  return (
    <InfoContainer
      type="গাড়ির মালিকানার তথ্য"
      editRoute="/profile/edit/owner-info"
    >
      {fields.map(({ info, label, icon }, index) => (
        <Info key={index} info={info} label={label} icon={icon} />
      ))}
    </InfoContainer>
  );
};

export { OwnerInfo };
