import location from "../../../assets/icons/location.svg";
import service from "../../../assets/icons/service.svg";
import star from "../../../assets/icons/star.svg";
import user from "../../../assets/icons/user.svg";
import vehicle from "../../../assets/icons/vehicle.svg";
import video from "../../../assets/icons/video.svg";

const categories = [
  { name: "generalInfo", title: "সাধারণ তথ্য", icon: user, percent: 60 },
  { name: "vehicleInfo", title: "বাহনের তথ্য", icon: vehicle, percent: 0 },
  { name: "serviceInfo", title: "সেবাদান তথ্য", icon: service, percent: 20 },
  { name: "locationInfo", title: "মাই লোকেশন", icon: location, percent: 50 },
  { name: "videoInfo", title: "ভিডিও", icon: video, percent: 30 },
  { name: "review", title: "রিভিও", icon: star, percent: 100 },
];

export default categories;
