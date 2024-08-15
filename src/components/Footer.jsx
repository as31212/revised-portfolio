import { motion } from "framer-motion";


const Footer = ()=>{

    return(
        <>
        <footer className="flex flex-col items-center gap-10 mb-5 mt-80">
            <motion.a initial={{opacity:0 , y: 200}} whileInView={{opacity:1 , y:0}} transition={{duration:.1}} className="text-4xl" href="#nav"><i className="fa-solid fa-arrow-up"></i></motion.a>
            <p className="mb-16">&copy; 2024 Ahmad Searcy. All rights reserved.</p>
        </footer>
        </>
    );
}
export default Footer;