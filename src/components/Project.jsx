import { motion } from "framer-motion";

const Project = ({title,img,url,github})=>{

    return(
        <>
        <motion.div initial={{opacity:0 , y: 100}} whileInView={{opacity:1 , y:0}} transition={{duration:.8}} viewport={{once:true}} className="flex flex-col min-w-80 w-1/5 h-1/2 rounded-xl border-2 border-gray-400 p-10 gap-10 shadow-xl">
            <img className="rounded-2xl shadow-lg" src={img} alt={`${title} image`} />
            <h3 className=" text-center text-3xl font-bold">{title}</h3>
            <div className="flex justify-around project-button-div ">
                <a target="_blank" href={github}><button className="border-2 border-gray-400 rounded-3xl font-bold p-5 duration-150 hover:bg-black hover:text-white">Github</button></a>
                <a target="_blank" href={url}><button className="border-2 border-gray-400 rounded-3xl font-bold p-5 duration-150 hover:bg-black hover:text-white">Live Demo</button></a>
            </div>
        </motion.div>
        </>
    );
}
export default Project;