import { AiFillHome, AiOutlineLogin } from 'react-icons/ai';
import { MdAppRegistration, MdOutlineTaskAlt } from 'react-icons/md';

const navLinks = [
  { text: 'হোম পেইজ', icon: <AiFillHome />, to: '/' },
  { text: 'সার্ভিস সমূহ', icon: <MdOutlineTaskAlt />, to: '/services' },
  { text: 'লগইন করুন', icon: <AiOutlineLogin />, to: '/login' },
  {
    text: 'রেজিস্ট্রেশন করুন',
    icon: <MdAppRegistration />,
    to: '/register',
    highlight: true,
  },
];

export default navLinks;
