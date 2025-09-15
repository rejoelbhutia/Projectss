

export default function Project({img, projectName}) {
  return (
    <div className="project flex flex-1 border flex-col justify-center items-center rounded-4xl p-8 gap-y-4">
        <div className=" project-image">
        <img src={img} alt="image" className="h-[300px] w-[300px] rounded-4xl" />
    </div>
    <h2 className=" text-4xl font-extrabold">{projectName}</h2>
    <div className="btn_container flex space-x-4">
        <button className=' w-32 h-14 border rounded-full font-bold p-4 text-sm hover:bg-neutral-800 hover:text-white'>Github</button>
        <button className=' w-32 h-14 border rounded-full font-bold p-4 text-sm hover:bg-neutral-800 hover:text-white'>Live Demo</button>
    </div>
    </div>
  )
}
