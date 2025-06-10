
import React, { useState, useEffect, useRef } from 'react';
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Experieneces from "./Sections/Experieneces";
import Testimonial from "./Sections/Testimonial";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const astronautRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Astronaut animation for loading screen
    const astronaut = astronautRef.current;
    
    if (astronaut && isLoading) {
      let startTime = null;
      
      const animate = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }
        
        const elapsed = timestamp - startTime;
        
        // Smooth floating animation
        const floatY = Math.sin(elapsed * 0.001) * 20;
        const floatX = Math.sin(elapsed * 0.0008) * 15;
        const tilt = Math.sin(elapsed * 0.0012) * 4;
        const scale = 1.0 + 0.06 * Math.sin(elapsed * 0.0015);
        
        const transform = `translateY(${floatY}px) translateX(${floatX}px) rotate(${tilt}deg) scale(${scale})`;
        astronaut.style.transform = transform;
        
        if (isLoading) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isLoading]);

  useEffect(() => {
    // Loading timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Loading Screen Component (Integrated)
  const LoadingScreen = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Stars */}
        {[...Array(60)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-25 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        {/* Enhanced Astronaut container */}
        <div className="relative mb-8">
          {/* Glow effect behind astronaut */}
          <div className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 mx-auto bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          
          {/* Astronaut image with enhanced styling */}
          <div
            ref={astronautRef}
            className="relative w-64 h-64 md:w-72 md:h-72 mx-auto bg-cover bg-no-repeat bg-center filter drop-shadow-2xl"
            style={{
              backgroundImage: "url(/Assets/astronaut.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: 'drop-shadow(0 10px 30px rgba(139, 92, 246, 0.3)) contrast(1.1) brightness(1.1)'
            }}
          />
          
          {/* Floating ring around astronaut */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400 rounded-full opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-pink-400 rounded-full opacity-20 animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
        </div>

        {/* Loading text with gradient */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Launching Portfolio
          </h1>
          <div className="text-white text-lg md:text-xl font-light">
            <span className="inline-block">Preparing for takeoff</span>
            <span className="inline-block ml-2">
              <span className="animate-bounce">.</span>
              <span className="animate-bounce" style={{animationDelay: '0.1s'}}>.</span>
              <span className="animate-bounce" style={{animationDelay: '0.2s'}}>.</span>
            </span>
          </div>
        </div>

        {/* Enhanced loading bar */}
        <div className="w-80 max-w-full mx-auto mb-6">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <div className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Animated loading dots with colors */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
        </div>

        {/* Progress text */}
        <div className="mt-6 text-gray-300 text-sm">
          Initializing space systems...
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Show loading screen when loading */}
      {isLoading && <LoadingScreen />}
      
      {/* Main application content */}
      <div
        className={`container mx-auto max-w-7xl transition-opacity duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ scrollBehavior: "smooth" }}
      >
        {/*Navbar */}
        <Navbar />
        
        {/*hero */}
        <section id="hero">
          <Hero />
        </section>
        
        {/*about */}
        <section id="about">
          <About />
        </section>
        
        {/*projects */}
        <section id="projects">
          <Projects />
        </section>
        
        {/*experience */}
        <section id="experience">
          <Experieneces />
        </section>
        
        {/*testimonial */}
        <section id="testimonial">
          <Testimonial />
        </section>
        
        {/*contact */}
        <section id="contact">
          <Contact />
        </section>
        
        {/*footer */}
        <Footer />
      </div>
    </>
  );
};

export default App;