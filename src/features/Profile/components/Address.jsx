// icons
import { useParams } from "react-router-dom";
import marker from "../assets/icons/marker.svg";
import useUserInfo from "../hooks/useUserInfo";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const Address = () => {
  const { id } = useParams();
  const [userInfo] = useUserInfo(id);

  const fields = [
    {
      info: `${userInfo?.presentAddress?.street}, ${userInfo?.presentAddress?.post} - ${userInfo?.presentAddress?.zip}, ${userInfo?.presentAddress?.subDistrict}, ${userInfo?.presentAddress?.district}।`,
      label: "বর্তমান ঠিকানা",
      icon: marker,
    },
    {
      info: `${userInfo?.permanentAddress?.street}, ${userInfo?.permanentAddress?.post} - ${userInfo?.permanentAddress?.zip}, ${userInfo?.permanentAddress?.subDistrict}, ${userInfo?.permanentAddress?.district}।`,
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

export { Address };
