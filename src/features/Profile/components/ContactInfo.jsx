// icons
import { useParams } from "react-router-dom";
import email from "../assets/icons/email.svg";
import facebook from "../assets/icons/facebook.svg";
import phone from "../assets/icons/phone.svg";
import useUserInfo from "../hooks/useUserInfo";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const ContactInfo = () => {
  const { id } = useParams();
  const [userInfo] = useUserInfo(id);

  const fields = [
    {
      type: "number",
      info: userInfo?.mobile,
      label: "মোবাইল নম্বর",
      icon: phone,
    },
    {
      type: "number",
      info: userInfo?.altMobile,
      label: "বিকল্প মোবাইল নম্বর",
      icon: phone,
    },
    { type: "email", info: userInfo?.email, label: "ই-মেইল", icon: email },
    {
      type: "text",
      info: userInfo?.facebookURL,
      label: "ফেইসবুক লিংক",
      icon: facebook,
    },
  ];

  return (
    <InfoContainer
      type="কন্টাক্ট ইনফো"
      fields={fields}
      editRoute="/profile/edit/contact-info"
    >
      {fields.map(
        ({ info, label, icon, editOnly }, index) =>
          editOnly || <Info key={index} info={info} label={label} icon={icon} />
      )}
    </InfoContainer>
  );
};

export { ContactInfo };
