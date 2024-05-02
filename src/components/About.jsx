import '@fortawesome/fontawesome-free/css/all.min.css';


const About = ()=>{

    return(
        <>
        <section className='p-10' id="About">
            <div className='flex justify-center' id="img-and-text">
                <img className='w-1/5 rounded-full ' src="Portfolio-picture.jpg" alt="image of Ahmad " />
                <div id="img-text">
                    <p className='text-1xl'>Hello, I'm</p>
                    <h2 className='font-bold text-4xl'>Ahmad Searcy</h2>
                    <h3 className='font-bold text-2xl'>Frontend Engineer</h3>
                    <div id="download-buttons">
                    
                    </div>
                    <div id="linkedin-github">
                    <a href="https://github.com/as31212"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/ahmad-searcy/"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default About;