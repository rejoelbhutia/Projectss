
import Article from './Article'
import htmlIcon from '../assets/html5.svg'
import cssIcon from '../assets/css.svg'
import jsIcon from '../assets/js.svg'
import reactIcon from '../assets/react.svg'
import tailwindIcon from '../assets/tailwind.png'
import nodeJsIcon from '../assets/node-js.svg'
import javaIcon from '../assets/java.svg'
import githubIcon from '../assets/github.svg'

export default function Experience() {
  return (
    <section className="expereience-con min-h-screen flex flex-col gap-5 items-center justify-center" id='experience'>

             <div className="mb-32">
        <p className='text-center text-gray-600'>Get To Know More</p>
        <h1 className='text-5xl md:text-6xl text-center font-bold'>About Me</h1>
      </div>

        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-8 lg:px-10'>
            <div className='border flex flex-1 flex-col rounded-4xl p-6'>
            <h2 className=" text-neutral-700 text-2xl md:text-3xl text-center">FrontEnd Development</h2>
            <div className=" article-con grid grid-col-1 xl:grid-cols-2 2xl:grid-cols-3 p-6 justify-center">
                    <Article img={htmlIcon} tech={"HTML"} level={"Intermediate"}/>
                    <Article img={cssIcon} tech={"CSS"} level={"Intermediate"}/>
                    <Article img={jsIcon} tech={"JS"} level={"Intermediate"}/>
                    <Article img={reactIcon} tech={"React"} level={"Beginner"}/>
                    <Article img={tailwindIcon} tech={"Tailwind"} level={"Beginner"}/>
                    
            </div>
            </div>

            <div className='border flex flex-1 flex-col rounded-4xl p-6'>
            <h2 className=" text-neutral-700 text-2xl md:text-3xl text-center">BackEnd Development</h2>
            <div className=" article-con grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 p-6">
                    <Article img={nodeJsIcon} tech={"NodeJs"} level={"Intermediate"}/>
                    <Article img={javaIcon} tech={"Java"} level={"Beginner"}/>
                    <Article img={githubIcon} tech={"Git/Github"} level={"Intermediate"}/>
                    <Article img={htmlIcon} tech={"HTML"} level={"Intermediate"}/>
                    <Article img={htmlIcon} tech={"HTML"} level={"Intermediate"}/>
                    <Article img={htmlIcon} tech={"HTML"} level={"Intermediate"}/>
            </div>
            </div>
            </div>
      
    </section>
  )
}

