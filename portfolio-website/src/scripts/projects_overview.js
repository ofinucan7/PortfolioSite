// independent file to load overview of projects
// NOTE: this just for the overview of the projects, full details of each project are in detailed_projects.js

export const projects = [
    {title: "Transformer", short_desc: "Basic Decoder Model", img: "/imgs/projects/transformer/transformer-img.jpg", 
      stack: ["Python", "PyTorch"],
      desc: "Custom RAG chatbot implementation that included custom BPE encoding, casual masking, attention, positional encoding, and optimizers.",
      more_button: "Visit GitHub",
      github: "https://github.com/ofinucan7/Basic-Transformer-Project"
    },
    {title: "Abracadabra", short_desc: "Song Identifier", img: "/imgs/projects/abracadabra/bunny.png", 
      stack: ["Python", "SQLite", "Librosa", "ffmpeg"],
      desc: "Song recognition program that can identify songs based on 15 second snippets even with background noise.",
      more_button: "Visit GitHub",
      github: "https://github.com/ofinucan7/abracadabra"
    },
    {title: "Movie+", short_desc: "Streaming Service Clone", img: "/imgs/projects/movie_plus/main_page.jpg",
      stack: ["React", "TailwindCSS", "Python", "JavaScript", "PostgreSQL", "Docker", "Cloud Deployment"], 
      desc: "Full stack streaming service clone that use The Movie Database's API for relevant movie information. Includes Stripe payment authentication and user account encryption.",
      redirect: "/projects/movie-plus",
      more_button: "Explore Details"
    },
    {title: "MedDay:EMT", short_desc: "Hackathon Project", img: "/imgs/projects/medday/home-screen-img.jpg", 
      stack: ["Python", "PyGame", "GitHub"],
      desc: "Winner of the Supporting Caregivers Track at the Pitt Challenge 2023 Hackathon.",
      redirect: "/projects/medday",
      more_button: "Explore Details"
    },
    {title: "Portfolio Website", short_desc: "Personal Website", img: "/imgs/projects/portfolio_website/home_page.jpg", 
      stack: ["React", "TailwindCSS", "JavaScript", "Docker", "Cloud Deployment"],
      desc: "Personal website for recruiters and others to see what I have been working on.",
      more_button: "Visit GitHub",
      github: "https://github.com/ofinucan7/PortfolioSite"
    },
  ]