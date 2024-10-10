const Nav = ({ navActive, toggleNav }) => {
    return (
        <>
            <nav id="nav" className={navActive ? 'shadow p-5 flex text-3xl flex-col items-center active' : 'shadow p-5 flex text-3xl'}>
                <h2 className="whitespace-nowrap" id="name">Garrett Kalter</h2>
                <button className="w-full" onClick={() => toggleNav()} id="nav-button">
                    <div className="flex flex-col gap-2 show-button">
                        <hr id="top-line" className={`border-[1px] rounded-lg border-black w-6 mx-auto line transition-transform duration-300 ${navActive ? 'transform top-line-active' : ''}`} />
                        <hr id="middle-line" className={`border-[1px] rounded-lg border-black w-6 mx-auto line transition-opacity duration-300 ${navActive ? 'opacity-0' : ''}`} />
                        <hr id="bottom-line" className={`border-[1px] rounded-lg border-black w-6 mx-auto line transition-transform duration-300 ${navActive ? 'transform bottom-line-active' : ''}`} />
                    </div>
                </button>
                <br />
                <ul id="nav-buttons-toggle" className={navActive ? 'flex flex-col gap-10 justify-center items-center' : 'hidden'}>
                    <a onClick={()=>toggleNav()} href="#About"><li>About</li></a>
                    <a onClick={()=>toggleNav()} href="#Experience"><li>Experience</li></a>
                    <a onClick={()=>toggleNav()} href="#Projects"><li>Projects</li></a>
                    <a onClick={()=>toggleNav()} href="#Contact"><li>Contact</li></a>
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
