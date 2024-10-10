
const About = ()=>{
    const date = new Date();

    return(
        <>
        <section className="min-h-screen h-auto mb-40" id="About">
            <p className="text-center">Get to Know</p>
            <h2 className="text-center text-5xl font-semibold">About Me</h2>
            <div className="flex flex-wrap gap-5 justify-center mt-20" id="experience-and-Education">
                <div className=" min-w-80 border-2 border-gray-400 w-1/3 max-w-[360px] text-center p-10 text-2xl rounded-xl" id="experience">
                <i class="fa-solid fa-medal"></i>
                    <p className="font-bold">{date.getFullYear() - 2021}+ Years GIS Experience</p>
                    <p className="text-[22px]">Proficient in ArcGIS Pro, ArcGIS Online, and QGIS for data visualization, spatial analysis, and database management</p>
                </div>
                <div className="min-w-80 border-2 border-gray-400 w-1/3 text-center p-10 text-2xl rounded-xl" id="education">
                <i class="fa-solid fa-book"></i>
                    <p className="font-bold">Education</p>
                    <p>Bachelors of Arts</p>
                    <p>Geography</p>
                    <p>&</p>
                    <p>Computer Science</p>
                </div>
            </div>
            <div className="min-w-80 border-2 mb-10 mt-10 mr-auto ml-auto border-gray-400 w-1/2 text-center p-10 text-2xl rounded-xl"><p>I graduated from Colgate University, earning my Bachelor of Arts in Geography and a minor in Computer Science. My academic journey included writing an honors thesis on heat vulnerability, which deepened my understanding of environmental challenges. With over two years of professional experience in GIS, including a rewarding internship in local government, I’ve enjoyed helping the public and learning about community needs.  I’m passionate about GIS and excited to explore all its applications, especially in public health, as I aim to use my skills to drive positive change in communities. When I’m not working, you’ll likely find me enjoying a baseball game—go Cubs!</p></div>
        </section>
        </>
    );
}
export default About;