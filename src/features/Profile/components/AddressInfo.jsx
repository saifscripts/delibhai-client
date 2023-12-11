// icons
import { useParams } from "react-router-dom";
import marker from "../assets/icons/marker.svg";
import useUserInfo from "../hooks/useUserInfo";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const AddressInfo = () => {
  const { id } = useParams();
  const [userInfo] = useUserInfo(id);

  const fields = [
    {
      info:
        userInfo?.presentAddress &&
        `${
          userInfo?.presentAddress?.union
            ? userInfo?.presentAddress?.union + ", "
            : ""
        }${
          userInfo?.presentAddress?.upazila
            ? userInfo?.presentAddress?.upazila + ", "
            : ""
        }${
          userInfo?.presentAddress?.district
            ? userInfo?.presentAddress?.district + ", "
            : ""
        }${userInfo?.presentAddress?.division || ""}।`,
      label: "বর্তমান ঠিকানা",
      icon: marker,
    },
    {
      info:
        userInfo?.permanentAddress &&
        `${
          userInfo?.permanentAddress?.union
            ? userInfo?.permanentAddress?.union + ", "
            : ""
        }${
          userInfo?.permanentAddress?.upazila
            ? userInfo?.permanentAddress?.upazila + ", "
            : ""
        }${
          userInfo?.permanentAddress?.district
            ? userInfo?.permanentAddress?.district + ", "
            : ""
        }${userInfo?.permanentAddress?.division || ""}।`,
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
