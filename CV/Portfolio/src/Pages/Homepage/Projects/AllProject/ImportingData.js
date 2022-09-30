// ICONS
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaBootstrap,
  FaGithubSquare,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiTypescript,
  SiGraphql,
  SiSolidity,
} from "react-icons/si";
import { TbBrandNextjs, TbBrowser } from "react-icons/tb";

// IMAGES
import nasa from "../../../../assets/images/Projects/NASA-Mission-Control.jpg";
import omnifood from "../../../../assets/images/Projects/Omnifood.jpg";
import Mapty from "../../../../assets/images/Projects/Mapty.jpg";
import Bankist from "../../../../assets/images/Projects/Bankist.jpg";
import Forkify from "../../../../assets/images/Projects/Forkify.jpg";
import Scratch from "../../../../assets/images/Projects/Scratch.jpg";
import NFTSchool from "../../../../assets/images/Projects/NFTSchool.jpg";
import ReactMeals from "../../../../assets/images/Projects/ReactMeals.jpg";

const icons = {
  html: <FaHtml5 size="1.40rem" />,
  css: <FaCss3Alt size="1.40rem" />,
  react: <FaReact size="1.40rem" />,
  node: <FaNodeJs size="1.40rem" />,
  aws: <FaAws size="1.40rem" />,
  docker: <FaDocker size="1.40rem" />,
  bootstrap: <FaBootstrap size="1.40rem" />,
  javascript: <SiJavascript size="1.40rem" />,
  tailwindcss: <SiTailwindcss size="1.40rem" />,
  redux: <SiRedux size="1.40rem" />,
  mongodb: <SiMongodb size="1.40rem" />,
  typescript: <SiTypescript size="1.40rem" />,
  graphql: <SiGraphql size="1.40rem" />,
  nextjs: <TbBrandNextjs size="1.40rem" />,
  browser: <TbBrowser size="1.40rem" />,
  github: <FaGithubSquare size="1.40rem" />,
  solidity: <SiSolidity size="1.40rem" />,
};

const projectImages = {
  nasa,
  omnifood,
  Mapty,
  Bankist,
  Forkify,
  Scratch,
  NFTSchool,
  ReactMeals,
};

export default icons;
export { projectImages };
