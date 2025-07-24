// independent file for all info loaded in the skills window
import { FaPython , FaReact, FaBrain, FaFigma, FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiRstudioide } from "react-icons/si";
import { DiHtml5, DiCss3, DiPostgresql, DiDocker, DiGithubBadge, DiWindows } from "react-icons/di";
import { BsMicrosoftTeams } from "react-icons/bs";


export const focus_skills = [
  { skill: "React", icon: FaReact,},
  { skill: "Python", icon: FaPython,},
  { skill: "AI / ML", icon: FaBrain,},
];

export const all_skills = {
  frontend: [
    { skill: "HTML", icon: DiHtml5,},
    { skill: "React", icon: FaReact,},
    { skill: "CSS", icon: DiCss3,},
    { skill: "Tailwind", icon: RiTailwindCssFill,},
    { skill: "Figma", icon: FaFigma,},
    { skill: "JavaScript", icon: IoLogoJavascript,},
  ],
  backend: [
    { skill: "Python", icon: FaPython,},
    { skill: "Java", icon: FaJava ,},
    { skill: "C", icon: FaPython,},
    { skill: "R", icon: SiRstudioide,},
    { skill: "PostgreSQL", icon: DiPostgresql,},
    { skill: "Docker", icon: DiDocker,},
  ],
  other: [
    { skill: "Git / Github", icon: DiGithubBadge,},
    { skill: "Window", icon: DiWindows,},
    { skill: "Office365", icon: BsMicrosoftTeams,},
  ],
};