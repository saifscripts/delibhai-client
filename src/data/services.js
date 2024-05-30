import dhero from "../assets/icons/bike.svg";
import bloodlagbe from "../assets/icons/bloodlagbe.svg";
import delifood from "../assets/icons/delifood.svg";
import dlabour from "../assets/icons/dlabour.svg";
import dsend from "../assets/icons/dsend.svg";
import dshop from "../assets/icons/dshop.svg";
import it from "../assets/icons/it.svg";
import tutor from "../assets/icons/tutor.svg";

const services = [
  { id: 1, icon: dhero, title: "বাহন", to: "vehicle", active: true },
  { id: 2, icon: dlabour, title: "লেবার", to: "labour" },
  { id: 3, icon: tutor, title: "টিউটর", to: "tutor" },
  { id: 4, icon: bloodlagbe, title: "ব্লাড লাগবে", to: "blood" },
  { id: 5, icon: dsend, title: "পার্সেল", to: "send" },
  { id: 6, icon: dshop, title: "শপ", to: "shop" },
  {
    id: 7,
    icon: it,
    title: "ডেলিভাই আইটি",
    to: "https://www.facebook.com/delibhaiit/",
  },
  {
    id: 8,
    icon: delifood,
    title: "ডেলিফুড",
    to: "https://www.facebook.com/delifoodbk/",
  },
];

export default services;
