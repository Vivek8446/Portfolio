import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Work() {
    return (
        <div className='bg-[#050816] md:p-[3rem] p-2 ' id="work">
            <div className='text-left'>
                <p className={`sm:text-[18px] text-[14px] text-secondary text-white uppercase tracking-wider`}>What I have done so far</p>
                <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Work Experience.</h2>
            </div>
            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1d1836', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #1d1836' }}
                    date="July 2024 - present"
                    iconStyle={{ background: '#1d1836', color: '#fff' }}
                    icon={<>
                        <div className='flex justify-center items-center w-full h-full'>
          <img 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Eo_circle_purple_letter-p.svg/1024px-Eo_circle_purple_letter-p.svg.png'
            alt="logo"
            className="w-[90%] h-[90%] object-contain rounded-full"
          />
        </div>
                    </>}
                >
                    <div>

                        <h3 className="vertical-timeline-element-title text-2xl text-left">Pedigraphy</h3>
                        <h4 className="vertical-timeline-element-subtitle text-left text-gray-400">Frontend Intern</h4>
                        {/* <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p> */}
                    </div>
                    <div>
                        <ul className="mt-5 list-disc ml-5 space-y-2 ">

                            <li

                                className="text-white-100 text-[14px] pl-1 tracking-wider text-left"
                            >
                                Created responsive and interactive user interfaces using React, TailwindCSS, and various libraries such as
                                React-router and React-toastify, enhancing user engagement and experience.
                            </li>

                            <li

                                className="text-white-100 text-[14px] pl-1 tracking-wider text-left"
                            >
                                Leveraged Axios for seamless API communication and integrated backend services for functionalities such as user
                                authentication, data retrieval, and form handling, ensuring robust and efficient data flow.
                            </li>



                        </ul>
                        <div className="flex flex-wrap gap-x-2">

                            <p
                                className="rounded-full pl-3 pr-3 "
                                style={{
                                    background: "#00c8ff",
                                    color: "white",
                                }}>
                                React
                            </p>
                            <p
                                className="rounded-full pl-3 pr-3 "
                                style={{
                                    background: "#8400ff",
                                    color: "white",
                                }}>
                                Axios
                            </p>
                            <p
                                className="rounded-full pl-3 pr-3 "
                                style={{
                                    background: "#0059ff",
                                    color: "white",
                                }}>
                                AntDesign
                            </p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1d1836', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #1d1836' }}
                    date="June 2024 - July 2024"
                    iconStyle={{ background: '#1d1836', color: '#fff' }}
                    icon={<>
                         <div className='flex justify-center items-center w-full h-full'>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOUf2DXhaZy-LnvUBVmB-NyofTBMz5v1uWA&s'
            alt="logo"
            className="w-[90%] h-[90%] object-contain rounded-full"
          />
        </div>
                    </>}
                >
                    <div>

                        <h3 className="vertical-timeline-element-title text-2xl text-left">Aaryaveer Enterprises</h3>
                        <h4 className="vertical-timeline-element-subtitle text-left text-gray-400">Freelance</h4>
                        {/* <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p> */}
                    </div>
                    <div>
                        <ul className="mt-5 list-disc ml-5 space-y-2 ">

                            <li

                                className="text-white-100 text-[14px] pl-1 tracking-wider text-left"
                            >
                                Developed a static product showcase website using React for the frontend, creating an intuitive user interface to display client products.
                            </li>
                            <li

                                className="text-white-100 text-[14px] pl-1 tracking-wider text-left"
                            >
                                Implemented backend functionality using Node.js and Nodemailer, allowing users to send inquiries through a contact form directly to the client via email.
                            </li>
                            

                        </ul>
                        <div className="flex flex-wrap gap-x-2">

                            <p className="rounded-full pl-3 pr-3 "
                                style={{
                                    background: "#00c8ff",
                                    color: "white",
                                }} >
                                React
                            </p>
                            <p className="rounded-full pl-3 pr-3 "
                                style={{
                                    background: "#8400ff",
                                    color: "white",
                                }} >
                                Axios
                            </p>
                            <p className="rounded-full pl-3 pr-3 "
                                style={{
                                    background: "#26ff43",
                                    color: "white",
                                }} >
                                NodeJs
                            </p>
                            <p className="rounded-full pl-3 pr-3 "
                                style={{
                                    background: "black",
                                    color: "white",
                                }} >
                                Express
                            </p>
                            <p className="rounded-full pl-3 pr-3 "
                                style={{
                                    background: "#24afff",
                                    color: "white",
                                }} >
                                NodeMailer
                            </p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1d1836', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #1d1836' }}
                    date="Sep 2023 - Oct 2023"
                    iconStyle={{ background: '#1d1836', color: '#fff' }}
                    icon={<>
                         <div className='flex justify-center items-center w-full h-full'>
          <img 
            src='https://png.pngtree.com/element_our/sm/20180410/sm_5acd1797b5783.jpg'
            alt="logo"
            className="w-[90%] h-[90%] object-contain rounded-full"
          />
        </div>
                    </>}
                >
                    <div>

                        <h3 className="vertical-timeline-element-title text-2xl text-left">Triface</h3>
                        <h4 className="vertical-timeline-element-subtitle text-left text-gray-400">Freelance</h4>
                        {/* <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p> */}
                    </div>
                    <div>
                        <ul className="mt-5 list-disc ml-5 space-y-2 ">

                            <li className="text-white-100 text-[14px] pl-1 tracking-wider text-left">
                                 Developed and implemented a static Course Catalogue Website for a client, effectively showcasing the institute’s educational
                                 offerings and providing detailed information on courses, faculty, and curriculum.
                            </li>
                            <li className="text-white-100 text-[14px] pl-1 tracking-wider text-left">
                            Leveraged front-end technologies and design principles to ensure a user-friendly experience, contributing to increased visibility
                            and engagement for the teaching institute
                            </li>

                        </ul>
                        <div className="flex flex-wrap gap-x-2">

                            <p  className="rounded-full pl-3 pr-3 "
                                style={{
                                    background: "#ff7700",
                                    color: "white",
                                }} >
                                HTML
                            </p>
                            <p  className="rounded-full pl-3 pr-3 "
                                style={{
                                    background: "blue",
                                    color: "white",
                                }} >
                                CSS
                            </p>
                            <p  className="rounded-full pl-3 pr-3 "
                                style={{
                                    background: "#ffd500",
                                    color: "white",
                                }} >
                                JS
                            </p>

                        </div>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline></div>
    )
}

export default Work