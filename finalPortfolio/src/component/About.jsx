import aboutPicture from '../assets/aboutPicture.jpeg';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';

export default function About() {
  return (
   
    <section id="about" className="about min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      
      
      <div className="mb-32">
        <p className='text-center text-gray-600'>Get To Know More</p>
        <h1 className='text-5xl md:text-6xl text-center font-bold'>About Me</h1>
      </div>

      {/* Main Content Area */}
    
      <div className="about_article flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* About Picture */}
        <div className="about_picture">
        
          <img
            src={aboutPicture}
            alt="A profile photo of the site owner"
            className='h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-3xl object-cover'
          />
        </div>
        
        {/* Details Section (Cards and Text) */}
       
        <div className="flex flex-col gap-8 max-w-xl">
        
        
          <div className='container flex flex-row gap-4'>
            
           
            <div className="flex flex-1 border border-gray-400 rounded-3xl flex-col justify-center items-center text-center p-6 gap-2">
              <img src={experienceIcon} alt="experience icon" className='h-8 w-8' />
              <h2 className='font-bold text-xl'>Experience</h2>
              <p className='text-md text-neutral-700'>Student</p>
              <p className='text-md text-neutral-700'>Web Development</p>
            </div>
            
            
            <div className="flex flex-1 border border-gray-400 rounded-3xl flex-col justify-center items-center text-center p-6 gap-2">
              <img src={educationIcon} alt="education Icon" className='h-8 w-8' />
              <h2 className='font-bold text-xl'>Education</h2>
              <p className='text-md text-neutral-700'>Schooling +2 IT</p>
              <p className='text-md text-neutral-700'>B.C.A Bachelors Degree</p>
            </div>
            
          </div>
        
          <div className="text_container">
            <p className='text-lg text-neutral-800 text-left leading-relaxed'>
              
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis autem iste atque ut distinctio asperiores ab voluptatum beatae mollitia ratione dolorum quidem soluta, harum ducimus error! Aut, eum, fugit neque vitae itaque similique iure quisquam dolor, atque unde temporibus accusantium!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
} 