import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Sidebar } from './components/Sidebar';
import links from './data/navLinks';
import useSidebar from './hooks/useSidebar';

// eslint-disable-next-line react/prop-types
const Navbar = ({ bgColor }) => {
  const { sidebarRef, isSidebarOpen, handleSidebarToggle } = useSidebar();

  const navLinks = links.map(({ text, to, highlight }, index) => {
    return (
      <NavLink
        key={index}
        to={to}
        style={{ borderRadius: '8px' }}
        className={({ isActive }) => isActive ? 'bg-neutral' : ''}>
        <div
          className={`${
            highlight
              ? 'bg-secondary hover:bg-primary text-white'
              : 'hover:bg-neutral'
          } p-4 lg:rounded-lg hover:cursor-pointer active:bg-primary text-sm`}>
          {text}
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

        <Sidebar
          isSidebarOpen={isSidebarOpen}
          handleSidebarToggle={handleSidebarToggle}
        />

        <ul className='hidden lg:flex gap-2'>{navLinks}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
