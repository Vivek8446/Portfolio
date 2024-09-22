/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from "react";
// import { motion } from "framer-motion";
// import { styles } from "../style";
// import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import Particle from './Particle'
import "../App.css"
const Hero = () => {
   
  return (

<section className={`relative w-full h-screen mb-36 mx-auto bg-[#050816] fadeInUp-animation`} id="home">
  <Particle id="particles" className="" />
  <div
    className={`sm:px-16 px-6 absolute inset-0 md:top-[20px] top-32 max-w-7xl max-auto flex flex-col md:flex-row items-start gap-5 `}
  >
    {/* Left Side: Text Section */}
    <div className="flex flex-col mt-10 items-center justify-center       w-full">
      <h1
        className={`font-black text-white md:text-7xl text-4xl  lg:leading-[98px] mt-2 text-center  flex flex-col lg:flex-row w-full md:w-auto items-center justify-center md:items-start gap-6 cursor-default select-none`}
      >
        Hi, Iʻm Vivek Kalpavruksha
      </h1>
      <div
        className={`text-[#dfd9ff] font-medium pt-6 text-3xl md:text-5xl lg:leading-[70px] mt-2 text-white-100 cursor-default select-none text-center `}
      >
        <Typewriter
          options={{
            strings: [
              "React Developer",
              "Software Developer",
              "Engineer",
              "Leader",
            //   "Full Stack Developer",
            ],
            autoStart: true,
            loop: true,
            cursor: "|",
            delay: 100,
            deleteSpeed: 40,
            pauseFor: 1000,
            wrapperClassName: "text-[#dfd9ff]",
            cursorClassName: "purple-text-gradient",
          }}
        />
      </div>
      <p
        className={`text-[17px] leading-[30px] mt-6 text-white w-full md:w-[75%] text-center select-none`}
      >
        I am a passionate Frontend developer with expertise in web application
        development. I excel at analyzing complex problems and implementing
        innovative strategies to overcome them.
      </p>
      <div className="flex md:flex-row items-center justify-start gap-8 mt-12">
      
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
        <a href="https://drive.google.com/file/d/1alZUIkbGlIRtAQFxfZTaDmwPML9Pb6Qu/view?usp=drive_link" download={true} className="text-[16px]">
            Resume
          </a>
        </button>
  
        {/* <button
          type="submit"
          className="border-[1px] border-white py-3 px-6 rounded-md hover:bg-secondary hover:text-primary duration-200 transition-all text-white"
        >
          <a href="https://drive.google.com/file/d/1alZUIkbGlIRtAQFxfZTaDmwPML9Pb6Qu/view?usp=drive_link" download={true} className="text-[16px]">
            Resume
          </a>
        </button> */}
      </div>
    </div>

    {/* Right Side: Image Section  w-1/2*/}
    {/* <div className="md:w-1/2 w-full flex justify-center items-center mt-14">
      <img
        src="https://rakshit-portfolio-one.vercel.app/picmine.png"
        alt="Your Image"
        className="w-[300px] h-[300px] object-contain"
      />
    </div> */}
  </div>
</section>

  );
};

export default Hero;