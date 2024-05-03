import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = ()=>{

    return(
        <>
        <section className='p-10 min-h-screen' id="Home">
            <div className='flex justify-center gap-20 mt-40' id="img-and-text">
                <img className='w-1/4 rounded-full ' src="Portfolio-picture.jpg" alt="image of Ahmad " />
                <div className='flex flex-col gap-10 text-center mt-40' id="img-text">
                    <div className='flex flex-col gap-3' id="Home-text">
                        <p className='text-2xl font-bold'>Hello, I'm</p>
                        <h2 className='font-bold text-5xl'>Ahmad Searcy</h2>
                        <h3 className='font-bold text-3xl text-gray-500'>Frontend Engineer</h3>
                        <div id="download-buttons">
                    </div>
                    </div>
                    <div className='flex justify-center gap-5' id="linkedin-github">
                    <a target='_blank' href="https://github.com/as31212"><i className="fa-brands fa-github text-4xl"></i></a>
                    <a target='_blank' href="https://www.linkedin.com/in/ahmad-searcy/"><i className="fa-brands fa-linkedin text-4xl"></i></a>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Home;