import profilePic from '../assets/profilePicture.jpg'
import gitHubIcon from '../assets/github.svg'
import linkedIn from '../assets/linkedIn.svg'
import NavSmallScreen from './NavSmallScreen'
import Navbar from './Navbar'

export default function Hero() {
  return ( <>
  <Navbar />
    <section className="hero-con min-h-screen flex flex-col lg:flex-row items-center justify-center gap-x-16 -mt-8 gap-y-2">
       
        <div className="profile-pic ">
            <img src={profilePic} alt="profile picture" className="w-48 sm:w-64  lg:w-96 h-auto object-cover rounded-full aspect-square mb-8"
/>
        </div>
        <div className='details-con flex flex-col gap-y-2'>
            <p className='  text-center text-lg text-gray-500 md:font-medium md:text-2xl mb-1'>Hello, I am</p>
            <h1 className=' text-center text-3xl md:text-5xl font-bold mb-1'>Rejoel Bhutia</h1>
            <p className=' text-center text-2xl font-bold text-gray-600 md:text-4xl mb-1'>A Student</p> 
            <div className="button-con flex  md:flex-row space-x-4 justify-center">
                <button className=' w-32 h-14 border rounded-full font-bold p-4 text-sm hover:bg-neutral-800 hover:text-white'>Download CV</button>
                <button className=' w-32 h-14 border rounded-full p-4 text-sm font-bold bg-neutral-800 text-white hover:bg-neutral-950'>Contact Info</button>
            </div>
            <div className="social-container flex items-center justify-center">
                <img src={gitHubIcon} alt="gitHubIcon" className=' h-10 cursor-pointer'/>
                <img src={linkedIn} alt="linkedIn icon" className=' h-10 cursor-pointer'/>
            </div>
        </div>
    </section>
    </>
  )
}
