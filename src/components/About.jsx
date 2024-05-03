
const About = ()=>{

    return(
        <>
        <section className="h-screen" id="About">
            <p className="text-center">Get to Know</p>
            <h2 className="text-center text-5xl font-semibold">About Me</h2>
            <div className="flex gap-5 justify-center mt-20" id="experience-and-Education">
                <div className="border-2 border-gray-400 w-1/3 text-center p-10 text-2xl rounded-xl" id="experience">
                <i class="fa-solid fa-medal"></i>
                    <p className="font-bold">Experience</p>
                    <p>1+ years</p>
                    <p>Frontend Development</p>
                    <p></p>
                </div>
                <div className="border-2 border-gray-400 w-1/3 text-center p-10 text-2xl rounded-xl" id="education">
                <i class="fa-solid fa-book"></i>
                    <p className="font-bold">Education</p>
                    <p>Bachelors Degree</p>
                    <p>BBA Business Analytics</p>
                </div>
            </div>
            <div className="border-2 mt-10 mr-auto ml-auto border-gray-400 w-1/2 text-center p-10 text-2xl rounded-xl"><p>As a self-taught frontend engineer, my journey in tech is fueled by an unquenchable thirst for knowledge and a commitment to continuous learning. Starting from scratch, I have cultivated a deep understanding of both design and data handling, enabling me to tackle complex challenges with precision and creativity. My ability to learn and adapt quickly is not just a skill but a cornerstone of my professional philosophy. I am always eager to expand my expertise and embrace new technologies or methodologies that enhance my effectiveness and contribute value to my team. This proactive approach ensures that I am always ready to meet the evolving demands of the tech industry.</p></div>
        </section>
        </>
    );
}
export default About;