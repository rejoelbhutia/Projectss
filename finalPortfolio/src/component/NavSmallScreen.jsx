import { useState } from 'react';
import HamIcon from '../assets/hamburger.png';
import HamburgerMenu from './HamburgerMenu';

export default function NavSmallScreen() {
  const [viewHamLinks, setHamLinks] = useState(false);

  return (
    <nav className='smallScreen-nav flex items-center justify-around w-full h-[15vh] lg:hidden relative'>
      <div className="nav-logo text-4xl cursor-pointer">Rejoel</div>

      <div
        className="ham-icon cursor-pointer"
        onClick={() => setHamLinks((prev) => !prev)}
      >
        <img src={HamIcon} alt="hamburger" className='h-12 w-12' />
      </div>

      {viewHamLinks && (
        <div className=" absolute top-[100%] right-4 z-50">
          <HamburgerMenu />
        </div>
      )}
    </nav>
  );
}
