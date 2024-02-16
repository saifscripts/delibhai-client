import location from '../../../assets/icons/location.svg';
import service from '../../../assets/icons/service.svg';
import star from '../../../assets/icons/star.svg';
import user from '../../../assets/icons/user.svg';
import vehicle from '../../../assets/icons/vehicle.svg';
import video from '../../../assets/icons/video.svg';

const categories = [
  { type: 'general', text: 'সাধারণ তথ্য', icon: user, percent: 60 },
  { type: 'vehicle', text: 'বাহনের তথ্য', icon: vehicle, percent: 0 },
  { type: 'service', text: 'সেবাদান তথ্য', icon: service, percent: 20 },
  { type: 'location', text: 'মাই লোকেশন', icon: location, percent: 50 },
  { type: 'video', text: 'ভিডিও', icon: video, percent: 30 },
  { type: 'review', text: 'রিভিও', icon: star, percent: 100 },
];

export default categories;

