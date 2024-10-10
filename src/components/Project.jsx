
const Project = ({title,img,url,description})=>{

    return(
        <>
        <div className="flex project min-w-80 max-w-6xl h-max-[400px] rounded-xl border-2 border-gray-400 p-10 gap-10 shadow-xl">
            <img className="rounded-2xl w-1/2 shadow-lg project-image" src={img} alt={`${title} image`} />
            <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-bold">{title}</h3>
                <p className="text-lg">{description}</p>
            </div>
            <div className="flex justify-around project-button-div my-auto mx-auto">
                <a target="_blank" href={url}><button className="border-2 border-gray-400 rounded-3xl font-bold p-5 duration-150 hover:bg-black hover:text-white">Explore</button></a>
            </div>
        </div>
        </>
    );
}
export default Project;