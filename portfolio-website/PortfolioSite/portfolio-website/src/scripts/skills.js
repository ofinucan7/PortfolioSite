// independent file for all info loaded in the skills window
import { FaPython , FaReact, FaBrain, FaFigma, FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiRstudioide } from "react-icons/si";
import { DiHtml5, DiCss3, DiPostgresql, DiDocker, DiGithubBadge, DiWindows } from "react-icons/di";
import { BsMicrosoftTeams } from "react-icons/bs";
import { TbMathFunction, TbTriangleInverted } from "react-icons/tb";


export const focus_skills = [
  { skill: "React", icon: FaReact,},
  { skill: "Python", icon: FaPython,},
  { skill: "AI", icon: FaBrain,},
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
    { skill: "Linear Algebra", icon: TbTriangleInverted,},
  ],
};

export const details_by_skill = {
  React: {
    Projects: ["Movie+", "Portfolio Website"],
    Courses: ["CS-1520 Programming Languages for Web Applications"]
  },
  Python: {
    Projects: ["Movie+", "MedDay:EMT"],
    Courses: ["CS-2078 Intro to Deep Learning", "CS-1520 Programming Languages for Web Applications"]
  },
  AI: {
    Projects: [],
    Courses: ["CS-2078 Intro to Deep Learning", "CS-2075 Intro to Machine Learning", "CS-1699 Implications of AI", "CS-1684 Bias and Ethical Implications in AI"]
  },
  HTML: {
    Projects: ["Movie+", "Portfolio Website"],
    Courses: ["CS-1520 Programming Languages for Web Applications"]
  },
  CSS: {
    Projects: ["Movie+", "Portfolio Website"],
    Courses: ["CS-1520 Programming Languages for Web Applications"]
  },
  Tailwind: {
    Projects: ["Movie+", "Portfolio Website"],
    Courses: []
  },
  Figma: {
    Projects: [],
    Courses: ["CS-1699 Implications of AI"]
  },
  JavaScript: {
    Projects: ["Movie+", "Portfolio Website"],
    Courses: ["CS-1520 Programming Languages for Web Applications"]
  },
  Java: {
    Projects: [],
    Courses: ["CS-1550 Introduction to Operating Systems", "CS-1501 Algorithms and Data Structures 2, CS-0455 Algorithms and Data Structures 1"],
  },
  C: {
    Projects: [],
    Courses: ["CS-1550 Introduction to Operating Systems", "CS-0449 Intro to Systems Software"],
  },
  R: {
    Projects: ["CS-2075 Intro to Machine Learning"],
    Courses: []
  },
  PostgreSQL: {
    Projects: ["Movie+"],
    Courses: []
  },
  Docker: {
    Projects: ["Movie+", "Portfolio Website"],
    Courses: []
  },
};