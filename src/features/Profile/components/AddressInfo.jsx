// icons
import { useParams } from "react-router-dom";
import marker from "../assets/icons/marker.svg";
import useUserInfo from "../hooks/useUserInfo";
import getAddressText from "../utils/getAddressText";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const AddressInfo = () => {
  const { id } = useParams();
  const [userInfo] = useUserInfo(id);

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
    <InfoContainer
      type="ঠিকানা"
      fields={fields}
      editRoute="/profile/edit/address"
    >
      {fields.map(
        ({ info, label, icon, editOnly }, index) =>
          editOnly || <Info key={index} info={info} label={label} icon={icon} />
      )}
    </InfoContainer>
  );
};

export { AddressInfo };
