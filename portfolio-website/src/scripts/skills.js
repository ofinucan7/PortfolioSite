// independent file for all info loaded in the skills window
import { FaPython , FaReact, FaBrain, FaFigma, FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiRstudioide } from "react-icons/si";
import { DiHtml5, DiCss3, DiPostgresql, DiDocker, DiGithubBadge, DiWindows } from "react-icons/di";
import { BsMicrosoftTeams } from "react-icons/bs";
import { TbMathFunction } from "react-icons/tb";


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
    { skill: "Multivariable Calculus", icon: TbMathFunction,},
    { skill: "Linear Algebra", icon: BsMicrosoftTeams,},
  ],
};

export const details_by_skill = {
  react: ["Movie+", "Portfolio Website", "CS-1520 Programming Languages for Web Applications"],
  python: ["CS-2078 Intro to Deep Learning", "CS-1520 Programming Languages for Web Applications"],
  ai: ["CS-2078 Intro to Deep Learning", "CS-2075 Intro to Machine Learning", "CS-1699 Implications of AI", "CS-1684 Bias and Ethical Implications in AI"],
  html: ["Movie+", "Portfolio Website", "CS-1520 Programming Languages for Web Applications"],
  css: ["Movie+", "Portfolio Website", "CS-1520 Programming Languages for Web Applications"],
  tailwind: ["Movie+", "Portfolio Website"],
  figma: ["CS-1699 Implications of AI"],
  js: ["Movie+", "Portfolio Website", "CS-1520 Programming Languages for Web Applications"],
  java: ["CS-1550 Introduction to Operating Systems", "CS-1501 Algorithms and Data Structures 2, CS-0455 Algorithms and Data Structures 1"],
  c: ["CS-1550 Introduction to Operating Systems", "CS-0449 Intro to Systems Software"],
  r: ["CS-2075 Intro to Machine Learning"],
  postgresql: ["Movie+"],
  docker: ["Movie+", "Portfolio Website"],
};