import React from "react";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      {/*Navbar */}
      <Navbar />
      {/*hero */}
      <Hero />

      
      {/*about */}
      <About/>
      <section  className="min-h-screen"/>
      <section  className="min-h-screen"/>
      <section  className="min-h-screen"/>
      <section  className="min-h-screen"/>
      {/*experience */}
      {/*testimonial */}
      {/*contact */}
      {/*footer */}
    </div>
  );
};

export default App;
