import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";


function App() {
  return (
    <>
      <Nav />
      <About />
      <Experience />
    </>
  );
}

export default App;
