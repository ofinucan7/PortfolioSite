// This is a detailed list of all project and info to be loaded on the more detail page

import { DiReact, DiJavascript1, DiPython, DiPostgresql, DiDocker, DiGithubBadge } from 'react-icons/di';
import { RiTailwindCssFill } from "react-icons/ri";
import { IoIosCloudUpload } from "react-icons/io";
import { MdEnhancedEncryption } from "react-icons/md";
import { BsStripe } from "react-icons/bs";
import { LuGamepad2 } from "react-icons/lu";


export const movie_plus = {
    proj_name: "Movie+",
    github: "https://github.com/ofinucan7/movie_plus",
    project: "https://movieplus-production.up.railway.app/",
    imgs: ["/imgs/projects/movie_plus/home_page.jpg", "/imgs/projects/movie_plus/login_screen.jpg", "/imgs/projects/movie_plus/main_page.jpg", "/imgs/projects/movie_plus/pricing_plans.jpg",
         "/imgs/projects/movie_plus/search.jpg", "/imgs/projects/movie_plus/tiles.jpg", "/imgs/projects/movie_plus/user_account.jpg"],
    
    stack: [
        {name: "React", icon: DiReact},
        {name: "TailwindCSS", icon: RiTailwindCssFill},
        {name: "JavaScript", icon: DiJavascript1},
        {name: "Python", icon: DiPython},
        {name: "PostgreSQL", icon: DiPostgresql},
        {name: "Docker", icon: DiDocker},
        {name: "Stripe", icon: BsStripe},
        {name: "Cloud Deployment", icon: IoIosCloudUpload},
        {name: "Encryption", icon: MdEnhancedEncryption},
        {name: "Github", icon: DiGithubBadge}
    ],
    
    dialogue: "Movie+ was a full-stack development project I worked on from late May 2025 to early July 2025. " +
            "Prior to this project, I had experience with HTML and CSS but had not used any modern frameworks such as React or TailwindCSS. " +
            "Over the course of the project, I became much more comfortable using React and TailwindCSS together to build dynamic web pages. " +
            "After completing the front end, I moved on to developing the backend and server-side components. Using PostgreSQL, I built a secure, encrypted backend " +
            "to store user data such as name, email, password, and plan expiration date. Additionally, I integrated Stripe to handle payment authentication. " +
            "Finally, I deployed the project to a server using Railway and Docker."

}

export const portfolio_site = {
    proj_name: "Portfolio Website",
    github: "owen-finucan.com",
    project: "owen-finucan.com",
    imgs: ["/imgs/projects/portfolio_website/home_page.jpg", "/imgs/projects/portfolio_website/home_page.jpg", "/imgs/projects/portfolio_website/home_page.jpg"],
    
    stack: [
        {name: "React", icon: DiReact},
        {name: "TailwindCSS", icon: RiTailwindCssFill},
        {name: "JavaScript", icon: DiJavascript1},
        {name: "Docker", icon: DiDocker},
        {name: "Cloud Deployment", icon: IoIosCloudUpload},
        {name: "Github", icon: DiGithubBadge}
    ],
    
    dialogue: "Just my personal portfolio site to show off some projects. Nothing too fancy."
}

export const medday = {
    proj_name: "MedDay-EMT",
    github: "https://github.com/ofinucan7/MedDay-EMT",
    project: "https://devpost.com/software/med-day?_gl=1*1ibj07o*_gcl_au*MTg0MTUwMjE0OS4xNzU0MDg2NTk0*_ga*ODgxNTEzNDI2LjE3NTQwODY1OTU.*_ga_0YHJK3Y10M*czE3NTQwODY1OTQkbzEkZzEkdDE3NTQwODY2MDgkajQ2JGwwJGgw",
    imgs: ["/imgs/projects/medday/Slide1.jpg", "/imgs/projects/medday/Slide2.jpg", "/imgs/projects/medday/Slide3.jpg",
            "/imgs/projects/medday/Slide4.jpg", "/imgs/projects/medday/Slide5.jpg", "/imgs/projects/medday/Slide6.jpg",
            "/imgs/projects/medday/Slide7.jpg", "/imgs/projects/medday/Slide8.jpg", "/imgs/projects/medday/Slide9.jpg",
            "/imgs/projects/medday/Slide10.jpg",
    ],
    
    stack: [
        {name: "Python", icon: DiReact},
        {name: "PyGame", icon: LuGamepad2},
        {name: "Github", icon: DiGithubBadge}
    ],
    
    dialogue: "This was my group's submission to the Pitt Challenge 2023 Healthcare Hackathon, where we won the Supporting Caregivers Track. Above is the slideshow we " +
              "presented to a panel of judges from various healthcare-related backgrounds. The project was designed as a training tool for EMT students to practice " +
              "their on-site arrival protocols. That is, the procedures EMTs should follow upon arriving at the scene of a call. As a team, we interviewed several " +
              "EMT students to better understand the rules, guidelines, and common mistakes associated with on-site arrival. While the design aesthetic was a " +
              "collaborative effort, I was primarily responsible for implementing it in PyGame. I also contributed to building the dictionary-based backend used to store user choices."

}