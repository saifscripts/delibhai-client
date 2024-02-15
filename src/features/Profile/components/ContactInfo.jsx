// icons
import email from "../assets/icons/email.svg";
import facebook from "../assets/icons/facebook.svg";
import phone from "../assets/icons/phone.svg";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const ContactInfo = ({ userInfo }) => {
  const fields = [
    {
      info: userInfo?.mobile,
      label: "মোবাইল নম্বর",
      icon: phone,
    },
    {
      info: userInfo?.altMobile,
      label: "বিকল্প মোবাইল নম্বর",
      icon: phone,
    },
    { info: userInfo?.email, label: "ই-মেইল", icon: email },
    {
      info: userInfo?.facebookURL,
      label: "ফেইসবুক লিংক",
      icon: facebook,
    },
  ];

  return (
    <InfoContainer type="কন্টাক্ট ইনফো" editRoute="/profile/edit/contact-info">
      {fields.map(({ info, label, icon }, index) => (
        <Info key={index} info={info} label={label} icon={icon} />
      ))}
    </InfoContainer>
  );
};

export { ContactInfo };
