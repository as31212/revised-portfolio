import { motion } from "framer-motion";

export const NavLineAnimation = ({navText}) =>{


    return(
        <>
        <motion.div
        className="line mx-auto bg-black "
        initial={{ width: "0" }}
        whileHover={{ width: "100%"}}
        transition={{ duration: .3 }}
      ></motion.div>
        </>
    );
}