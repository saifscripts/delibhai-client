import { BiArrowBack } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

export default function TopPanel() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='container flex justify-between items-center sticky top-0 z-50 h-16 sm:h-24 text-2xl xl:text-4xl'>
      <BiArrowBack onClick={handleGoBack} />
      <img src={logo} alt='deliBhai logo' className='w-8 xl:w-12' />
      <CiSearch />
    </div>
  );
}
