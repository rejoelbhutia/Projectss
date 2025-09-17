
import Hero from './component/Hero'
import About from './component/About'
import Experience from './component/Experience'
import ProjectContainer from './component/ProjectContainer'
import Contact from './component/Contact'
import { Element } from 'react-scroll'

function App() {
  return (
    <>
    <Element name="hero">
       <Hero />
    </Element>
 
 <Element name="about">
   <About />
   </Element>

    <Element name="experience">
      <Experience />
    </Element>

   <Element name="project">
     <ProjectContainer />
    </Element>
   
   <Element name="contact">
    <Contact />
    </Element>
    </>
  )
}

export default App
