import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = ()=>{

    return(
        <>
       <section className='p-10 min-h-screen mb-20' id="Home">
  <div className='flex flex-wrap justify-center gap-20 mt-40' id="img-and-text">
    <img className='w-1/2 min-w-80 max-w-96 rounded-full' src="garrett-port-image.jpg" alt="image of Ahmad " />
    <div className='flex flex-col justify-center gap-10 text-center' id="img-text">
      <div className='flex flex-col gap-3' id="Home-text">
        <p className='text-2xl font-bold'>Hello, I'm</p>
        <h2 className='font-bold text-5xl'>Garrett Kalter</h2>
        <h3 className='font-bold text-3xl text-gray-500'>GIS Engineer</h3>
        <div id="download-buttons">
          {/* Add your download buttons here */}
        </div>
      </div>
      <div className='flex justify-center gap-5' id="linkedin-github">
       {/* TODO include email icon and link */} 
        <a target='_blank' href="https://www.linkedin.com/in/garrett-kalter-2690a6242/"><i className="fa-brands fa-linkedin text-4xl"></i></a>
      </div>
    </div>
  </div>
</section>

        </>
    );
}
export default Home;