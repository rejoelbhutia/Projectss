

export default function Article({img, tech, level}) {
  return (
    <article className="flex gap-x-1">
        <img src={img} alt="icon" className=" h-15 w-15sm:h-20 sm:w-20"/>
        <div className=" p-2">
            <h3 className=" text-xl sm:text-2xl font-bold">{tech}</h3>
            <p className=" text-l f">{level}</p>
        </div>
    </article>
  )
}
