import location from '../../../assets/icons/location.svg';
import service from '../../../assets/icons/service.svg';
import star from '../../../assets/icons/star.svg';
import user from '../../../assets/icons/user.svg';
import vehicle from '../../../assets/icons/vehicle.svg';
import video from '../../../assets/icons/video.svg';

const categories = [
  { id: 1, text: 'সাধারণ তথ্য', icon: user, percent: 60 },
  { id: 2, text: 'বাহনের তথ্য', icon: vehicle, percent: 0 },
  { id: 3, text: 'সেবাদান তথ্য', icon: service, percent: 20 },
  { id: 4, text: 'মাই লোকেশন', icon: location, percent: 50 },
  { id: 5, text: 'ভিডিও', icon: video, percent: 30 },
  { id: 6, text: 'রিভিও', icon: star, percent: 100 },
];

export default categories;

