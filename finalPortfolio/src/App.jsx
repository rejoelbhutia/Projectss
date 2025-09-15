import {Routes, Route} from 'react-router-dom'
import Hero from './component/Hero'
import About from './component/About'
import Experience from './component/Experience'
import ProjectContainer from './component/ProjectContainer'
import Contact from './component/Contact'

function App() {


  return (
    <>
  <Routes>
    <Route path='/' element={<Hero />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/experience' element={<Experience />}/>
    <Route path='/project' element={<ProjectContainer />}/>
    <Route path='/contact' element={<Contact />}/>
  </Routes>
  

    
    </>
  )
}

export default App
