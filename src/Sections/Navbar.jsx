
import React, { useState } from "react";

function Navigation() {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a 
          href="#hero" 
          className="nav-link"
          onClick={(e) => handleNavClick(e, 'hero')}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a 
          href="#about" 
          className="nav-link"
          onClick={(e) => handleNavClick(e, 'about')}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a 
          href="#experience" 
          className="nav-link"
          onClick={(e) => handleNavClick(e, 'experience')}
        >
          Experience
        </a>
      </li>
      <li className="nav-li">
        <a 
          href="#projects" 
          className="nav-link"
          onClick={(e) => handleNavClick(e, 'projects')}
        >
          Work
        </a>
      </li>

      <li className="nav-li">
        <a 
          href="#contact" 
          className="nav-link"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    // Close mobile menu when clicking on a link
    setIsOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/20">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0 ">
          <a
            href="#hero"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            onClick={(e) => handleNavClick(e, 'hero')}
          >
            Abdul Rauf
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-100 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={
                isOpen ? "/Assets/close.svg" : "/Assets/menu.svg"
              }
              alt="menu icon"
              className="h-6 w-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <div className="block overflow-hidden text-center sm:hidden">
          <nav className="pb-5">
            <Navigation />
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;