import React from "react";
import Card from "../Components/Card";

const About = () => {
    
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/*Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
            <img src="/Assets/coding-pov.png" alt="" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"/>
            <div className="z-10">
                <p className="headtext">Hi I'm a React Developer</p>
                <p className="subtext">Over the last year, I developed my frontend
                    skills to deliever dynamic and responsive web applications.
                </p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>

        {/*Grid 2 */}
        <div className=" grid-default-color grid-2">
            <div  className="flex items-center justify-center w-full h-full">
                <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
                <Card style={{rotate:"75deg",top:"30%",left:"20%",}} text="GRASP" />
                <Card style={{rotate:"-30deg",top:"60%",left:"45%",}} text="SOLID" />
                <Card style={{rotate:"90deg",bottom:"30%",left:"70%",}} text="DESIGN PATTERNS" />
                <Card style={{rotate:"-45deg",top:"55%",left:"0%",}} text="DESIGN PRINCIPLES" />
                <Card style={{rotate:"20deg",top:"10%",left:"30%",}}  text="SRP" />
                <Card style={{rotate:"30deg",top:"70%",left:"70%",}}  image="/Assets/logos/html5.svg"  />
                <Card style={{rotate:"-45deg",top:"70%",left:"25%",}}  image="/Assets/logos/git.svg" />
            </div>
        </div>

        {/*Grid 3 */}
        <div className=" grid-black-color grid-3"></div>
        {/*Grid 4 */}
        <div className=" grid-special-color grid-4"></div>
        {/*Grid 5 */}
        <div className=" grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
