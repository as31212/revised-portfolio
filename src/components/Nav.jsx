
const Nav = ({navActive,toggleNav})=>{

    return(
        <>
        <nav id="nav" className={navActive ?'shadow p-5 flex text-3xl flex-col items-center' :'shadow p-5 flex text-3xl'}>
            <h2 className=" whitespace-nowrap" id="name">Ahmad Searcy</h2>
            <button className=" w-full" onClick={()=> toggleNav()} id="nav-button"><i className="fa-solid fa-bars show-button"></i></button>
            <br />
            <ul id="nav-buttons-toggle" className={navActive ? `flex flex-col gap-10 justify-end ` : `hidden`}>
                <a href="#About"><li>About</li></a>
                <a href="#Experience"><li>Experience</li></a>
                <a href="#Projects"><li>Projects</li></a>
                <a href="#Contact"><li>Contact</li></a>
            </ul>
            <ul id="nav-buttons" className='flex gap-10'>
                <a href="#About"><li>About</li></a>
                <a href="#Experience"><li>Experience</li></a>
                <a href="#Projects"><li>Projects</li></a>
                <a href="#Contact"><li>Contact</li></a>
            </ul>
        </nav>
        </>
    );
}
export default Nav;