// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import vk from '../assets/vk.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="rounded-b-3xl    sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-5 border-slate-800 border-b bg-[#1a2d84]">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 rounded-full md:rounded-lg ">
                <div className="relative flex items-center justify-between h-16 ">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only rounded-sm">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="block h-6 w-6 "
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center  justify-center sm:items-stretch sm:justify-start">
                        {/* <img src={vk} alt="" className='w-7 h-7 mt-1 mr-1 '/> */}
                        <div className="flex-shrink-0 mt-1">
                            <a 
                            href="#home"
                            exact="true"
                            className="text-white text-xl font-bold">
                            
                                Vivek Kalpavruksha
                            </a>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 rounded-sm">
                                <a
                                    
                                    href="#work"
                                    className=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    activeclassname="bg-gray-900 text-white
                                    "

                                    
                                //     style={({ isActive }) => {
                                //     return {
                                //         textDecoration: isActive ? "underline" : "",
                                //         textUnderlineOffset: isActive ? "4px" : "",
                                //     };
                                // }}
       >
                                   Work
                                </a>
                                <a
                                    
                                    href="#projects"
                                    className=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    activeclassname="bg-gray-900 text-white
                                    "

                                    
                                //     style={({ isActive }) => {
                                //     return {
                                //         textDecoration: isActive ? "underline" : "",
                                //         textUnderlineOffset: isActive ? "4px" : "",
                                //     };
                                // }}
       >
                                   Projects
                                </a>
                                <a
                                    
                                    href="#skills"
                                    className=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    activeclassname="bg-gray-900 text-white
                                    "

                                    
                                //     style={({ isActive }) => {
                                //     return {
                                //         textDecoration: isActive ? "underline" : "",
                                //         textUnderlineOffset: isActive ? "4px" : "",
                                //     };
                                // }}
       >
                                   Skills
                                </a>
                                {/* <NavLink
                                    to=""
                                    exact="true"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    activeclassname="bg-gray-900 text-white"
                                    style={({ isActive }) => {
                                    return {
                                        textDecoration: isActive ? "underline" : "",
                                        textUnderlineOffset: isActive ? "4px" : "",
                                    
                                    
                                    };
                                }}
                                >
                                    Project
                                </NavLink> */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden `}>
                <div className="px-2 pt-2 pb-3 space-y-1  ">
                    <a
                    exact="true"
                        href='#work'
                        
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        activeclassname="bg-gray-900 text-white"
                    >
                        Work
                    </a>
                    <a
                    exact="true"
                        href='projects'
                        
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        activeclassname="bg-gray-900 text-white"
                    >
                        Projects
                    </a>
                    <a
                    exact="true"
                      href='skills'
                        
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        activeclassname="bg-gray-900 text-white"
                    >
                        Skills
                    </a>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;