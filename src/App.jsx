import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Bio from "./components/About";


function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
