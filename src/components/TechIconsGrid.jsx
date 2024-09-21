import React from 'react';
import Tilt from 'react-parallax-tilt';
import { FaReact, FaJs, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb,SiJquery,SiVercel,  SiRedux, SiPostman, SiFirebase, SiNextdotjs, SiNestjs, SiFlutter, SiVite } from 'react-icons/si';
import { TbBrandCpp } from "react-icons/tb";

const techIcons = [
  { name: 'React JS', icon: <FaReact size={50} color="#61DAFB" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} color="#06B6D4" /> },
  { name: 'JavaScript', icon: <FaJs size={50} color="#F7DF1E" /> },
  { name: 'JQuery', icon: <SiJquery size={50} color="#F7DF1E" /> },
  // { name: 'TypeScript', icon: <SiTypescript size={50} color="#3178C6" /> },
  { name: 'Redux Toolkit', icon: <SiRedux size={50} color="#764ABC" /> },
  { name: 'Postman', icon: <SiPostman size={50} color="#fa7305" /> },
  { name: 'CPP', icon: <TbBrandCpp size={50} color="#61DAFB" /> },

  { name: 'Node JS', icon: <FaNodeJs size={50} color="#339933" /> },
  // { name: 'MongoDB', icon: <SiMongodb size={50} color="#47A248" /> },
  // { name: 'NextJS', icon: <SiNextdotjs size={50} color="#000000" /> },
  // { name: 'NestJS', icon: <SiNestjs size={50} color="#E0234E" /> },
  { name: 'Firebase', icon: <SiFirebase size={50} color="#FFCA28" /> },
  // { name: 'Flutter', icon: <SiFlutter size={50} color="#02569B" /> },
  { name: 'Vite', icon: <SiVite size={50} color="#646CFF" /> },
  { name: 'Git', icon: <FaGitAlt size={50} color="#F05032" /> },
  { name: 'Vercel', icon: <SiVercel size={50} color="#000" /> },
  // { name: 'docker', icon: <FaDocker size={50} color="#2496ED" /> },
];

const TechIconsGrid = () => {
  return (
    <div className="flex justify-center items-center h-screen 0 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {techIcons.map((tech, index) => (
          <Tilt
            key={index}
            className=" rounded-full p-6 shadow-lg border-b backdrop-filter backdrop-blur-sm bg-opacity-1"
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            perspective={1000}
            glareEnable={false}
            glareMaxOpacity={0}
            scale={1.05}
            transitionSpeed={150}
            gyroscope={true}
            trackOnWindow={true}
           
            style={{ borderRadius: '100%',size:"20px", overflow: 'hidden', marginTop: '0px' }}
          >
            <div className="flex flex-col items-center ">
              {tech.icon}
              <p className="text-white text-center mt-2 text-lg font-semibold">{tech.name}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default TechIconsGrid;
