import { useEffect, useRef, useState } from 'react';
import { AiFillHome, AiOutlineLogin } from 'react-icons/ai';
import { MdAppRegistration, MdOutlineTaskAlt } from 'react-icons/md';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import minilogo from '../../assets/images/minilogo.png';

// eslint-disable-next-line react/prop-types
const Navbar = ({ bgColor }) => {
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Function to handle clicks on the document
    const handleDocumentClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener('click', handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  let navLinks = [
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

  navLinks = navLinks.map(({ text, icon, to, highlight }, index) => {
    return (
      <NavLink
        key={index}
        onClick={handleSidebarToggle}
        to={to}
        className={({ isActive }) =>
          isActive
            ? `bg-slate-700 lg:bg-neutral lg:rounded-lg ${
                highlight && 'lg:ml-8'
              }`
            : `lg:rounded-lg ${highlight && 'lg:ml-8'}`
        }>
        <div
          className={`${
            highlight
              ? 'lg:bg-secondary lg:hover:bg-primary lg:text-white'
              : 'lg:text-black hover:bg-neutral'
          } ${({ isActive }) =>
            isActive &&
            'bg-neutral'} lg:p-4 lg:rounded-lg hover:cursor-pointer active:bg-primary  border-b border-slate-700 px-8 py-4 lg:border-none flex gap-5 items-center text-lg lg:text-sm`}>
          <span className='lg:hidden text-3xl'>{icon}</span>
          <span>{text}</span>
        </div>
      </NavLink>
    );
  });

  return (
    <nav
      ref={sidebarRef}
      className={`bg-${
        bgColor || '[transparent]'
      } sticky top-0 lg:shadow-sm z-50`}>
      <div className='container flex justify-between items-center h-16 sm:h-24'>
        <RxHamburgerMenu
          className={`lg:hidden text-3xl ${
            bgColor === 'secondary' && 'text-white'
          }`}
          onClick={handleSidebarToggle}
        />

        <Link className='hidden lg:block' to={'/'}>
          <img src={logo} alt='deliBhai Logo' className='w-28 sm:w-44' />
        </Link>

        <div
          className={`fixed top-0 bottom-0 left-0 lg:static w-[350px] lg:w-auto bg-slate-800 lg:bg-[transparent] text-white lg:text-black transition-transform ease-in ${
            isSidebarOpen
              ? 'translate-x-0'
              : '-translate-x-full lg:translate-x-0'
          }`}>
          <div className='lg:hidden flex justify-between items-center py-5 px-4  border-b border-slate-700'>
            <Link
              onClick={handleSidebarToggle}
              className='flex gap-4 items-center'
              to={'/'}>
              <img src={minilogo} alt='deliBhai Logo' className='w-12' />
              <p className='text-4xl text-white font-bold'>deliBhai</p>
            </Link>

            <div
              onClick={handleSidebarToggle}
              className='w-12 h-12 flex justify-center items-center text-3xl border border-slate-700 hover:bg-slate-700'>
              <RxCross1 />
            </div>
          </div>

          <ul className='flex flex-col lg:flex-row p-0 lg:gap-2'>{navLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
