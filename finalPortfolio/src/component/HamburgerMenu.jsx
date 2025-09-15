// HamburgerMenu.jsx
export default function HamburgerMenu() {
  return (
    <ul className='flex flex-col space-y-4 bg-white p-4 rounded-md shadow-lg text-2xl'>
      <li className='hover:border-b hover:text-gray-500'>
        <a href="#about">About</a>
      </li>
      <li className='hover:border-b hover:text-gray-500'>
        <a href="#experience">Experience</a>
      </li>
      <li className='hover:border-b hover:text-gray-500'>
        <a href="#project">Projects</a>
      </li>
      <li className='hover:border-b hover:text-gray-500'>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}
