import location from "../../../assets/icons/location.svg";
import service from "../../../assets/icons/service.svg";
import star from "../../../assets/icons/star.svg";
import user from "../../../assets/icons/user.svg";
import vehicle from "../../../assets/icons/vehicle.svg";
import video from "../../../assets/icons/video.svg";

const categories = [
  { name: "general", title: "সাধারণ তথ্য", icon: user, index: true },
  { name: "vehicle", title: "বাহনের তথ্য", icon: vehicle },
  { name: "service", title: "সেবাদান তথ্য", icon: service },
  { name: "location", title: "লোকেশন", icon: location },
  { name: "video", title: "ভিডিও", icon: video },
  { name: "review", title: "রিভিও", icon: star },
];

export default categories;
