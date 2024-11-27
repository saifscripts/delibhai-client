import dhero from "../assets/icons/bike.svg";
import bloodlagbe from "../assets/icons/bloodlagbe.svg";
import delifood from "../assets/icons/delifood.svg";
import dlabour from "../assets/icons/dlabour.svg";
import dsend from "../assets/icons/dsend.svg";
import dshop from "../assets/icons/dshop.svg";
import home from "../assets/icons/home.svg";
import it from "../assets/icons/it.svg";
import tutor from "../assets/icons/tutor.svg";
import getUserAgent from "../utils/getUserAgent";

const userAgent = getUserAgent();

const services = [
  { id: 1, icon: dhero, title: "গাড়ী লাগবে", to: "vehicles", active: true },
  { id: 2, icon: dlabour, title: "লেবার লাগবে", to: "labour" },
  { id: 3, icon: tutor, title: "টিউটর লাগবে", to: "tutor" },
  { id: 4, icon: home, title: "বাসা লাগবে", to: "house" },
  { id: 5, icon: dshop, title: "শপিং করুন", to: "shop" },
  { id: 6, icon: dsend, title: "পার্সেল পাঠান", to: "send" },
  { id: 7, icon: bloodlagbe, title: "ব্লাড লাগবে", to: "blood" },
  {
    id: 8,
    icon: it,
    title: "ডেলিভাই আইটি",
    to:
      userAgent === "pc"
        ? "https://www.facebook.com/delibhaiit/"
        : userAgent === "android"
          ? "fb://page/127914237079370"
          : "fb://profile/127914237079370",
  },
  {
    id: 9,
    icon: delifood,
    title: "ডেলিফুড",
    to:
      userAgent === "pc"
        ? "https://www.facebook.com/delifoodbk/"
        : userAgent === "android"
          ? "fb://page/100787635956232"
          : "fb://profile/100787635956232",
  },
];

export default services;
