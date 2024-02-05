// icons
import { useParams } from "react-router-dom";
import { getServiceTime } from "../../../utils/convertTime";
import clock from "../assets/icons/clock.svg";
import serviceAddress from "../assets/icons/service-area.svg";
import serviceType from "../assets/icons/service-type.svg";
import station from "../assets/icons/station.svg";
import steering from "../assets/icons/steering.svg";
import useUserInfo from "../hooks/useUserInfo";
import { Info } from "./Info";
import { InfoContainer } from "./InfoContainer";

const ServiceInfo = () => {
  const { id } = useParams();
  const [userInfo] = useUserInfo(id);

  const fields = [
    {
      info: userInfo?.serviceUsage,
      label: "গাড়ির ব্যবহার",
      icon: steering,
    },
    {
      info: userInfo?.serviceType,
      label: "গাড়ির সেবা",
      icon: serviceType,
    },
    { info: userInfo?.mainStation, label: "প্রধান স্ট্যাশন", icon: station },
    {
      info: userInfo?.serviceAddress?.areas?.join(", "),
      label: "সার্ভিস প্রদানের এলাকা সমূহ",
      icon: serviceAddress,
    },
    {
      info: getServiceTime(userInfo?.serviceTime),
      label: "সার্ভিস প্রদানের সময়",
      icon: clock,
    },
  ];
  return (
    <InfoContainer
      type="সার্ভিস তথ্য"
      fields={fields}
      editRoute="/profile/edit/service-info"
    >
      {fields.map(({ info, label, icon }) => (
        <Info key={label} info={info} label={label} icon={icon} />
      ))}
    </InfoContainer>
  );
};

export { ServiceInfo };
