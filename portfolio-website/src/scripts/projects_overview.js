// independent file to load overview of projects
// NOTE: this just for the overview of the projects, full details of each project are in detailed_projects.js

export const projects = [
    {title: "Movie+", short_desc: "Streaming Service Clone", img: "/imgs/projects/movie_plus/main_page.jpg",
      stack: ["React", "TailwindCSS", "Python", "JavaScript", "PostgreSQL", "Docker", "Cloud Deployment"], 
      desc: "Full stack streaming service clone that use The Movie Database's API for relevant movie information. Includes Stripe payment authentication and user account encryption.",
      redirect: "/projects/movie-plus"
    },
    {title: "Portfolio Website", short_desc: "Personal website", img: "/imgs/projects/portfolio_website/home_page.jpg", 
      stack: ["React", "TailwindCSS", "JavaScript", "Docker", "Cloud Deployment"],
      desc: "Personal website for recruiters and others to see what I have been working on.",
      redirect: "/projects/portfolio"
    },
    {title: "MedDay:EMT", short_desc: "Hackathon Project", img: "/imgs/projects/medday/home-screen-img.jpg", 
      stack: ["Python", "PyGame", "GitHub"],
      desc: "Winner of the Supporting Caregivers Track at the Pitt Challenge 2023 Hackathon.",
      redirect: "/projects/medday"
    }
  ]