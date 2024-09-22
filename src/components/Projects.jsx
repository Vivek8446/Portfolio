import Card from './Card'
import React from 'react'

const links = [{
    id:1,
    title: "Post Pallete",
    img: "https://github.com/user-attachments/assets/06d2fa64-65a1-4d4a-9fa1-58313247d537",
    github:"https://github.com/Vivek8446/PostPalette",
    link: "https://post-palette.vercel.app/",
    des: "PostPalette is a web app for users to upload and manage content like images, titles, and articles. Built with React and styled using TailwindCSS, it offers a clean interface, while Appwrite handles data storage, authentication, and uploads.",
    tech:"React , Appwrite"
},
{
    id:2,
    title: "Connectify",
    img: "https://github.com/user-attachments/assets/0232edfe-a476-407f-a0d0-c448459188ce",
    github:"https://github.com/Vivek8446/Connectify",
    link: "https://connectify-flax.vercel.app/",
    des:"Connectify is a chat application that allows users to join chat rooms and communicate with others in real time. Built with React and styled using TailwindCSS, it integrates Firebase for backend services like user authentication, data storage, and Google sign-in.",
    tech:"React , Firebase"
},
{
    id:3,
    title: "Predictive Maintenance for Industry",
    img: "https://github.com/user-attachments/assets/251378ca-3763-4302-b847-1a57998fe7d2",
    github:"https://github.com/suhasamane1101/render-demo",
    link: "https://render-demo-builtup.onrender.com/",
    des:"Predictive Maintenance for Industry uses data and machine learning to predict equipment failures and optimize maintenance. By analyzing sensor data, it identifies issues early, reducing downtime, cutting costs, and extending equipment life.",
    tech:"HTML,CSS, JS, Flask"
},
{
    id:4,
    title: "UI clone of Disney + Hotstar",
    img: "https://github.com/user-attachments/assets/6b1ea41f-6ecc-4603-bda0-0faf28be50cb",
    github:"https://github.com/Vivek8446/Disney-Clone",
    link: "https://disney-clone-vivek-seven.vercel.app/",
    des:"The Disney+ Hotstar UI clone is a web application that displays dynamic movie images fetched from MovieDB. Built using React and styled with TailwindCSS, it replicates the platform's visual design while showcasing real-time movie images.",
    tech:"React, theMovieDB"
},
{
    id:5,
    title: "AgriTech",
    img: "https://i0.wp.com/www.india-briefing.com/news/wp-content/uploads/2021/11/MicrosoftTeams-image-6.jpg?fit=900%2C506&ssl=1",
    github:"https://github.com/suhasamane1101/CodeByte_Agritech",
    link: "https://github.com/suhasamane1101/CodeByte_Agritech",
    des:"Agritect is a project focused on using technology to improve agriculture by identifying plant diseases and predicting crop yields. Leveraging machine learning and data analytics, it helps farmers detect diseases early and optimize crop management for better harvests.",
    tech:"HTML, CSS, JS, Flask"
},
];


function Projects() {
  return (
    <div className='bg-[#050816] md:p-[3rem]  p-2' id="projects">
         <div className='text-left '>
                <p className={`sm:text-[18px] text-[14px] text-secondary text-white uppercase tracking-wider`}>My work</p>
                <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[50px]`}>Projects.</h2>
            </div>
            <div className=' relative rounded-full  flex justify-around items-center flex-wrap flex-col md:flex-row  p-2 mt-10'>
            {links.map(link =>(

           <Card 
           className="w-1/2"
           key={link.id}
            img={link.img}
           title={link.title}
            github={link.github}
            link={link.link}
            des={link.des}
            tech={link.tech}

           />
            ))}
           {/* <Card 
           className="w-1/2"
           img="https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?cs=srgb&dl=pexels-minan1398-813269.jpg&fm=jpg"
            github=""
            link=""
           />
           <Card 
           className="w-1/2"
           img="https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?cs=srgb&dl=pexels-minan1398-813269.jpg&fm=jpg"
            github=""
            link=""
           />
           <Card 
           className="w-1/2"
           img="https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?cs=srgb&dl=pexels-minan1398-813269.jpg&fm=jpg"
            github=""
            link=""
           />
           <Card 
           className="w-1/2"
           img="https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?cs=srgb&dl=pexels-minan1398-813269.jpg&fm=jpg"
            github=""
            link=""
           />
           <Card 
           className="w-1/2"
           img="https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?cs=srgb&dl=pexels-minan1398-813269.jpg&fm=jpg"
            github=""
            link=""
           />
           <Card 
           className="w-1/2"
           img="https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?cs=srgb&dl=pexels-minan1398-813269.jpg&fm=jpg"
            github=""
            link=""
           />
          */}
           
            </div>
    </div>
  )
}

export default Projects