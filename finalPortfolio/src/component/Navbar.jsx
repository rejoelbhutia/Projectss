
import NavSmallScreen from '../component/NavSmallScreen'

export default function Navbar() {
  return (
    <>
    <nav className=' desktop-nav hidden lg:flex items-center justify-around w-full h-[17vh]'>
        <div className="nav-logo text-4xl">Rejoel</div>
        <div className="links">
            <ul className=' flex space-x-8 text-2xl '>
                <li className=' hover:border-b hover:text-gray-500'><a href="#about">About</a></li>
                <li><a href="#experience" className=' hover:border-b hover:text-gray-500'>Experience</a></li>
                <li><a href="#project" className=' hover:border-b hover:text-gray-500'>Projects</a></li>
                <li><a href="#contact" className=' hover:border-b hover:text-gray-500'>Contact</a></li>
            </ul>
        </div>
    </nav>
    <NavSmallScreen />
    </>
  )
}
