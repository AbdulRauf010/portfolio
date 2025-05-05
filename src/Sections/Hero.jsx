import React, { useEffect, useRef } from 'react';
import HeroText from '../Components/HeroText'
import ParallaxBackground from '../Components/ParallaxBackground';


const Hero = () => {
  // Create a ref for the astronaut element
  const astronautRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Use the ref directly instead of querySelector
    const astronaut = astronautRef.current;
    
    if (astronaut) {
      console.log("Astronaut element found, applying animation");
      
      // Remove any existing inline styles that might interfere
      astronaut.style.transition = 'none';
      
      let startTime = null;
      
      const animate = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
          console.log("Animation started");
        }
        
        const elapsed = timestamp - startTime;
        
        // Exaggerate the animation initially to make sure it's visible
        const floatY = Math.sin(elapsed * 0.0005) * 20; // Increased amplitude
        const floatX = Math.sin(elapsed * 0.0003) * 15; // Increased amplitude
        const tilt = Math.sin(elapsed * 0.0004) * 5;    // Increased amplitude
        const scale = 1.0 + 0.08 * Math.sin(elapsed * 0.001); // Increased scale
        
        // Log animation values occasionally to verify changes
        if (elapsed % 1000 < 20) {
          console.log(`Animation values: X=${floatX.toFixed(2)}, Y=${floatY.toFixed(2)}, tilt=${tilt.toFixed(2)}, scale=${scale.toFixed(2)}`);
        }
        
        const transform = `translateY(${floatY}px) translateX(${floatX}px) rotate(${tilt}deg) scale(${scale})`;
        astronaut.style.transform = transform;
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          console.log("Animation cleaned up");
        }
      };
    } else {
      console.error("Astronaut element not found!");
    }
  }, []);

  return (
    <section className='flex items-start justify-center md:items-start md:justify-start c-space min-h-screen overflow-hidden'>
      <HeroText />
      <ParallaxBackground />
      <div
        ref={astronautRef} // Attach the ref directly to the element
        className="astronaut mt-40 w-full h-[70vh] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(/Assets/astronaut.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // Remove any transform here if it exists
        }}
      />
    </section>
  );
};

export default Hero;