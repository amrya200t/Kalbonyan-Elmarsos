import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaAws,
  FaNpm,
  FaDocker,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiGraphql,
} from "react-icons/si";

const SKILLS_DATA = [
  {
    name: "HTML",
    icon: <FaHtml5 size="3rem" />,
  },
  {
    name: "CSS 3",
    icon: <FaCss3Alt size="3rem" />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript size="3rem" />,
  },
  {
    name: "ReactJs",
    icon: <FaReact size="3rem" />,
  },
  {
    name: "Redux",
    icon: <SiRedux size="3rem" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size="3rem" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size="3rem" />,
  },
  {
    name: "NodeJs",
    icon: <FaNodeJs size="3rem" />,
  },
  {
    name: "Mongodb",
    icon: <SiMongodb size="3rem" />,
  },
  {
    name: "Graphql",
    icon: <SiGraphql size="3rem" />,
  },
  {
    name: "Docker",
    icon: <FaDocker size="3rem" />,
  },
  {
    name: "AWS",
    icon: <FaAws size="3rem" />,
  },
  {
    name: "NPM",
    icon: <FaNpm size="3rem" />,
  },
  {
    name: "Github",
    icon: <FaGithub size="3rem" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size="3rem" />,
  },
];

export default SKILLS_DATA;
