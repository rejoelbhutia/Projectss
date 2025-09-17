// HamburgerMenu.jsx
export default function HamburgerMenu() {
  return (
              <ul className=' flex space-x-8 text-2xl '>
                    <li className=' hover:border-b hover:text-gray-500'>
                      <a href="#about"
                  
                  >About</a>
                    </li>
                    <li className='  hover:border-b hover:text-gray-500'><a  href="#experience"
                    
                  >Experience</a></li>
                    <li className=' hover:border-b hover:text-gray-500'>
                      <a  href="#project"
                  >Project</a>
                    </li>
                    <li className=' hover:border-b hover:text-gray-500'><a href="#contact"
                  >Contact</a></li>
                </ul>
  );
}
