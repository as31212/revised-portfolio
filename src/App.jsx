import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  const [navActive,setNavActive] = useState(false);
  const toggleNav = ()=>{
    setNavActive(!navActive);
  }
  return (
    <>
        <Nav navActive={navActive} toggleNav={toggleNav} />
        <Home />
        <About />
        <Experience />
        <Projects />
        <br className=" min-h-screen" />
        <Contact />
    </>
  );
}

export default App;
