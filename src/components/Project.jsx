
const Project = ({title,img,url,github})=>{

    return(
        <>
        <div className="flex flex-col w-1/5 h-1/2 rounded-xl border-2 border-gray-400 p-10 gap-10 shadow-xl hover:scale-105 duration-300 ease-in-out">
            <img className="rounded-2xl shadow-lg" src={img} alt={`${title} image`} />
            <h3 className=" text-center text-3xl font-bold">{title}</h3>
            <div className="flex justify-around" id="project-button-div">
                <button className="border-2 border-gray-400 p-5 rounded-3xl font-bold"><a target="_blank" href={github}>Github</a></button>
                <button className="border-2 border-gray-400 p-5 rounded-3xl font-bold"><a target="_blank" href={url}>Live Demo</a></button>
            </div>
        </div>
        </>
    );
}
export default Project;