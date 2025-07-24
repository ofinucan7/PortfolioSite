// This is a detailed list of all project and info to be loaded on the more detail page

import { DiReact, DiJavascript1, DiPython, DiPostgresql, DiDocker, DiGithubBadge } from 'react-icons/di';
import { RiTailwindCssFill } from "react-icons/ri";
import { IoIosCloudUpload } from "react-icons/io";
import { MdEnhancedEncryption } from "react-icons/md";
import { BsStripe } from "react-icons/bs";


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