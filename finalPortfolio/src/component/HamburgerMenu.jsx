// HamburgerMenu.jsx
export default function HamburgerMenu() {
  return (
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
  );
}
