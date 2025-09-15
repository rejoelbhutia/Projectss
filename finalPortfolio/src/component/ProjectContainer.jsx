import Project from "./Project"
import projectIcon from '../assets/project-1.png'

export default function ProjectContainer() {
  return (
    <section className='projects-section min-h-screen flex flex-col items-center justify-center' id="project">
    <div className="mb-32">
        <p className='text-center text-gray-600'>Browse My Recent</p>
        <h1 className='text-5xl md:text-6xl text-center font-bold'>Projects</h1>
      </div>

      <div className="project_list mx-8 flex flex-wrap gap-8">
            <Project img={projectIcon} projectName={"Project 1"}/>
             <Project img={projectIcon} projectName={"Project 1"}/>
              <Project img={projectIcon} projectName={"Project 1"}/>
      </div>

    </section>
  )
}
