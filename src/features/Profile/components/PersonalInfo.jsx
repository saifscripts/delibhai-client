// icons
import { useParams } from "react-router-dom";
import convertNumber from "../../../utils/convertNumber";
import nid from "../assets/icons/NID.svg";
import age from "../assets/icons/age.svg";
import bloodGroup from "../assets/icons/blood-group.svg";
import father from "../assets/icons/father.svg";
import gender from "../assets/icons/sex.svg";
import person from "../assets/icons/user.svg";
import useUserInfo from "../hooks/useUserInfo";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const PersonalInfo = () => {
  const { id } = useParams();
  const [userInfo] = useUserInfo(id);

  const fields = [
    { type: "text", info: userInfo?.name, label: "নিজের নাম", icon: person },
    {
      type: "text",
      info: userInfo?.fatherName,
      label: "পিতার নাম",
      icon: father,
    },
    {
      type: "select",
      options: ["পুরুষ", "মহিলা", "অন্যান্য"],
      info: userInfo?.gender,
      label: "লিঙ্গ",
      icon: gender,
    },
    {
      type: "select",
      options: ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"],
      info: userInfo?.bloodGroup,
      label: "রক্তের গ্রুপ",
      icon: bloodGroup,
    },
    {
      type: "number",
      data: userInfo?.age,
      info: userInfo?.age && `${convertNumber(userInfo?.age)} বছর`,
      label: "বয়স",
      icon: age,
    },
    {
      type: "text",
      info: userInfo?.nid,
      label: "জন্মনিবন্ধন/NID নম্বর",
      icon: nid,
    },
    {
      type: "file",
      label: "জন্মনিবন্ধন/NID এর ছবি",
      editOnly: true,
    },
  ];
  return (
    <InfoContainer
      type="ব্যক্তিগত তথ্য"
      fields={fields}
      editRoute="/profile/edit/personal-info"
    >
      {fields.map(
        ({ info, label, icon, editOnly }, index) =>
          editOnly || <Info key={index} info={info} label={label} icon={icon} />
      )}
    </InfoContainer>
  );
};

export default PersonalInfo;
