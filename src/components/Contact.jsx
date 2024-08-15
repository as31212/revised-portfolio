import Footer from "./Footer";


const Contact = ()=>{

    return(
        <>
        <div className=" min-h-screen h-auto flex flex-col gap-10 items-center p-5" id="Contact">
            <p>Get In Touch</p>
            <h2 className="font-bold text-5xl">Contact Me</h2>
            <div className=" border-2 border-gray-400 rounded-3xl flex flex-wrap gap-10 p-5 text-2xl mt-60" id="anchors">
                <a target="_blank" href="mailto:ahmadsearcy7@gmail.com"><i class="fa-solid fa-envelope"></i> ahmadsearcy7@gmail.com</a>
                <a target="_blank" href="https://www.linkedin.com/in/ahmad-searcy/"><i class="fa-brands fa-linkedin"></i> https://www.linkedin.com/in/ahmad-searcy/</a>
            </div>
            <Footer />
        </div>
       
        </>
    );
}
export default Contact;