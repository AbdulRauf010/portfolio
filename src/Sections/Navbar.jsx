import React, { useState } from "react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="" className="nav-link">
          About
        </a>
      </li>
      <li className="nav-li">
        <a href="" className="nav-link">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a href="" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/20">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0 ">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
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
