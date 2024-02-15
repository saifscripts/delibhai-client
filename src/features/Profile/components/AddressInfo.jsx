// icons
import marker from "../assets/icons/marker.svg";
import getAddressText from "../utils/getAddressText";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const AddressInfo = ({ userInfo }) => {
  const fields = [
    {
      info: getAddressText(userInfo?.presentAddress),
      label: "বর্তমান ঠিকানা",
      icon: marker,
    },
    {
      info: getAddressText(userInfo?.permanentAddress),
      label: "স্থায়ী ঠিকানা",
      icon: marker,
    },
  ];

  return (
    <InfoContainer type="ঠিকানা" editRoute="/profile/edit/address">
      {fields.map(({ info, label, icon }, index) => (
        <Info key={index} info={info} label={label} icon={icon} />
      ))}
    </InfoContainer>
  );
};

export { AddressInfo };
