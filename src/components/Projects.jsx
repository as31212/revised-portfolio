import Project from "./Project";

const Projects = ()=>{

    return(
        <>
        <section id="Projects">
            <p className="text-center">Browse My Recent</p>
            <h3 className="text-center text-5xl font-semibold">Projects</h3>
            <div className=" flex justify-center gap-20 h-screen p-10" id="Projects-container">
            <Project title="Shop-IT" img="Shop.png" github="https://github.com/as31212/Mock-Ecommerce-Store" url="https://shop-it-beta.netlify.app/" />
            </div>
        </section>
        </>
    );
}
export default Projects;