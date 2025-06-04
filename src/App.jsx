import React from "react";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Experieneces from "./Sections/Experieneces";
import Testimonial from "./Sections/Testimonial";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl" style={{ scrollBehavior: "smooth" }}>
      {/*Navbar */}
      <Navbar />
      {/*hero */}
      <Hero />

      
      {/*about */}
      <About/>
      
      {/*projects */}
      <Projects/>
        {/*experience */}
       <Experieneces/>
      
      {/*testimonial */}
      <Testimonial/>
    
     <section  className="min-h-screen"/>
      <section  className="min-h-screen"/>
      {/*contact */}
      {/*footer */}
    </div>
  );
};

export default App;
