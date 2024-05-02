
const Nav = ()=>{

    return(
        <>
        <nav className="shadow p-5 flex justify-around text-3xl">
            <h2>Ahmad Searcy</h2>
            <ul className="flex gap-8">
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