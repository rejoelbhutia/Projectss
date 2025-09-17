import {Link} from 'react-scroll'
import NavSmallScreen from '../component/NavSmallScreen'

export default function Navbar() {
  return (
    <>
    <nav className=' desktop-nav hidden lg:flex items-center justify-around w-full h-[17vh]'>
        <div className="nav-logo text-4xl">Rejoel</div>
        <div className="links">
            <ul className=' flex space-x-8 text-2xl '>
                <li className=' hover:border-b hover:text-gray-500'>
                  <Link  to="about"
                smooth={true}
                duration={500}
                offset={-70}
              >About</Link>
                </li>
                <li className='  hover:border-b hover:text-gray-500'><Link  to="experience"
                smooth={true}
                duration={500}
                offset={-70}
              >Experience</Link></li>
                <li className=' hover:border-b hover:text-gray-500'>
                  <Link  to="project"
                smooth={true}
                duration={500}
                offset={-70}
              >Project</Link>
                </li>
                <li className=' hover:border-b hover:text-gray-500'><Link  to="contact"
                smooth={true}
                duration={500}
                offset={-70}
              >Contact</Link></li>
            </ul>
        </div>
    </nav>
    <NavSmallScreen />
    </>
  )
}
