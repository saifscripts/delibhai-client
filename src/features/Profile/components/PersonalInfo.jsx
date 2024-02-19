// icons
import englishToBengaliNumber from "../../../utils/englishToBengaliNumber";
import nid from "../assets/icons/NID.svg";
import age from "../assets/icons/age.svg";
import bloodGroup from "../assets/icons/blood-group.svg";
import father from "../assets/icons/father.svg";
import gender from "../assets/icons/sex.svg";
import person from "../assets/icons/user.svg";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const PersonalInfo = ({ userInfo }) => {
  const fields = [
    { info: userInfo?.name, label: "নিজের নাম", icon: person },
    {
      info: userInfo?.fatherName,
      label: "পিতার নাম",
      icon: father,
    },
    {
      info: userInfo?.gender,
      label: "লিঙ্গ",
      icon: gender,
    },
    {
      info: userInfo?.bloodGroup,
      label: "রক্তের গ্রুপ",
      icon: bloodGroup,
    },
    {
      info: userInfo?.age && `${englishToBengaliNumber(userInfo?.age)} বছর`,
      label: "বয়স",
      icon: age,
    },
    {
      info: userInfo?.nid,
      label: "জন্মনিবন্ধন/NID নম্বর",
      icon: nid,
    },
  ];
  return (
    <InfoContainer
      type="ব্যক্তিগত তথ্য"
      editRoute="/profile/edit/personal-info"
    >
      {fields.map(({ info, label, icon }, index) => (
        <Info key={index} info={info} label={label} icon={icon} />
      ))}
    </InfoContainer>
  );
};

export default PersonalInfo;
