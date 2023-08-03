import { BiArrowBack } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

export default function TopPanel() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='container flex justify-between items-center sticky top-0 z-50 h-16 sm:h-24 text-2xl xl:text-4xl bg-white'>
      <BiArrowBack onClick={handleGoBack} />
      <img src={logo} alt='deliBhai logo' className='w-8 xl:w-12' />
      <BsThreeDotsVertical />
    </div>
  );
}
