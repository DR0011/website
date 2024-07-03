import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experiance from "./components/Experiance";
import Contact from "./components/Contact";
import PortFolio from "./components/PortFolio";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Experiance />
        <Contact />
        <PortFolio />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
