import mailIcon from '../assets/mail.svg'
import linkedInIcon from '../assets/linkedIn.svg'
import Footer from './Footer'

export default function Contact() {
  return (

    <section className='min-h-screen flex flex-col items-center justify-center relative pb-48' id='contact'>

      <div className="text-center mb-8">
        <p className='text-gray-600'>Get In Touch</p>
        <h1 className='text-5xl md:text-6xl font-bold'>Contact Me</h1>
      </div>

     
      <div className='contact-links flex flex-row border rounded-4xl p-5'>
        <div className="mail-con flex">
          <img src={mailIcon} alt="mail Icon" className=' h-8 w-8 md:h-12 md:w-12 hidden md:block cursor-pointer'/>
          <img src={mailIcon} alt="mail Icon" className=' h-8 w-8 md:h-12 md:w-12 md:hidden cursor-pointer'/>
          <p className='text-xl md:text-2xl md:pt-1.5 block md:hidden cursor-pointer'><a href="mailto:rejoelbhutia69@gmail.com">mail</a></p>
          <p className='text-xl md:text-2xl md:pt-1.5 hidden md:block cursor-pointer'><a href="mailto:rejoelbhutia69@gmail.com">rejoelbhutia69@gmail.com</a></p>
        </div>
        <div className="linkedin-con flex">
          <img src={linkedInIcon} alt="linkedIcon Icon" className=' h-8 w-8 md:h-12 md:w-12 hidden md:block cursor-pointer'/>
          <img src={linkedInIcon} alt="linkedIcon Icon" className=' h-8 w-8 md:h-12 md:w-12 md:hidden cursor-pointer'/>
          <p className=' text-xlmd:text-2xl md:pt-1.5 block md:hidden cursor-pointer'><a href="#">LinkedIn</a></p>
          <p className=' text-xl md:text-2xl md:pt-1.5 hidden md:block cursor-pointer'><a href="#">LinkedIn</a></p>
        </div>
      </div>

 
      <div className="absolute bottom-0 w-full p-8">
        <nav className='flex items-center justify-center w-full mb-4'>
          <div className="links">
        
            <ul className='flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 text-2xl'>
              <li className='hover:border-b hover:text-gray-500'><a href="#">About</a></li>
              <li><a href="#" className='hover:border-b hover:text-gray-500'>Experience</a></li>
              <li><a href="#" className='hover:border-b hover:text-gray-500'>Projects</a></li>
              <li><a href="#" className='hover:border-b hover:text-gray-500'>Contact</a></li>
            </ul>
          </div>
        </nav>
        <Footer />
      </div>

    </section>
  )
}