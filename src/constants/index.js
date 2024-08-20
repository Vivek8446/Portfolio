import { meta, shopify, starbucks, tesla, pedigraphy } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    postman,
    antdesign,
    flask

} from "../assets/icons";

export const skills = [
    {
        imageUrl: react,
        name: "REACT",
        type: "Frontend",
        title: "REACT",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
        title: "Tailwind CSS",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    //     title: "Express",
    // },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
        title: "GitHub",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
        title: "Git",
    },
    {
        imageUrl: postman,
        name: "POSTMAN",
        type: "Tool",
        title: "POSTMAN",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
        title: "HTML",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
        title: "CSS",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
        title: "JavaScript",
    },
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    //     title: "MongoDB",
    // },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    //     title: "Motion",
    // },
    {
        imageUrl: antdesign,
        name: "Ant Design",
        type: "Frontend",
        title: "Ant Design",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
        title: "Material-UI",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    //     title: "Next.js",
    // },
    // {
    //     imageUrl: nodejs,
    //     name: "Node.js",
    //     type: "Backend",
    //     title: "Node.js",
    // },
    // {
    //     imageUrl: react,
    //     name: "React",
    //     type: "Frontend",
    //     title: "React",
    // },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
        title: "Redux",
    },
    {
        imageUrl: flask,
        name: "FLASK",
        type: "Frontend",
        title: "FLASK",
    },
   
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    //     title: "TypeScript",
    // }
];

export const experiences = [
    {
        title: "React.js Intern",
        company_name: "Pedigraphy.in",
        icon: pedigraphy,
        iconBg: "#accbe1",
        date: "July 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     // company_name: "Tesla",
    //     // icon: tesla,
    //     iconBg: "#fbc3bc",
    //     // date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     // company_name: "Shopify",
    //     // icon: shopify,
    //     iconBg: "#b7e4c7",
    //     // date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     // company_name: "Meta",
    //     // icon: meta,
    //     iconBg: "#a2d2ff",
    //     // date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Vivek8446/',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vivek-kalpavruksha/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'PostPalette',
        description: 'Developed a dynamic platform for users to upload and manage images and articles. The frontend is crafted using React and TailwindCSS, providing a responsive and visually appealing interface. On the backend, I utilized Appwrite as a backend-as-a-service (BaaS) to handle user authentication, data storage, and security. Users can upload images that remain private to their account, ensuring personalized content management. The platform also integrates the TinyMCE editor, allowing users to create and format articles with ease.',
        link: 'https://post-palette.vercel.app/',
        github: 'https://github.com/Vivek8446/PostPalette'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Connectify',
        description: 'developed a real-time chat application that allows users to create or join chat rooms by entering a room name. Built with React and TailwindCSS for a clean and responsive user interface, the app leverages Firebase for backend functionality, including real-time data synchronization and user authentication. This project showcases my ability to implement real-time communication features and manage dynamic user interactions within a web application.',
        link: 'https://connectify-flax.vercel.app/',
        github: 'https://github.com/Vivek8446/Connectify'
    },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Predictive Maintenance for Industry',
        description: `I integrated HTML with Python by developing a web application using Flask. Flask, a lightweight web framework, allows me to create dynamic web pages by combining HTML with Python. This integration enables seamless interaction between the frontend and backend, allowing for the creation of interactive and data-driven web applications. This project demonstrates my ability to build and deploy web applications that effectively combine frontend design with backend logic.`,
        link: 'https://render-demo-builtup.onrender.com/',
        github: 'https://github.com/suhasamane1101/render-demo'
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'UI clone of Disney + Hotstar',
        description: 'Ddeveloped a UI clone of the Disney Plus Hotstar home page using React and TailwindCSS to replicate the platforms sleek and modern design. To populate the movie and TV show data, I integrated Axios with the MovieDB API, allowing the application to dynamically display content. This project showcases my ability to recreate complex UI designs while integrating real-world data sources, demonstrating proficiency in frontend development and API integration.',
        link: 'https://disney-clone-vivek-seven.vercel.app/',
        github: 'https://github.com/Vivek8446/Disney-Clone'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'AgriTech',
        description: 'Integrated HTML with Python by using Flask, allowing the creation of dynamic web pages that interact seamlessly with backend logic. This integration enables real-time data processing and user interaction, making the application more responsive and functional. This project highlights my skills in combining frontend and backend technologies to build robust web applications.',
        link: 'https://github.com/suhasamane1101/CodeByte_Agritech',
        github: 'https://github.com/suhasamane1101/CodeByte_Agritech'
    },
];