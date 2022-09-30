import icons, { projectImages } from "./ImportingData";

const summary = (projectSummary) => {
  if (projectSummary.split(" ").length > 10) {
    return projectSummary.split(" ").slice(0, 10).join(" ") + "...";
  }
  return projectSummary;
};

const categoriesTags = {
  hobbies: "Hobbies",
  academic: "Academic",
  frontend: "Front End",
  backend: "Back End",
};

const PROJECTS_DATA = [
  {
    name: "NASA Mission Control",
    description: summary("NASA Mission Control Dashboard."),
    tags: [categoriesTags.hobbies, categoriesTags.backend],
    liveUrl: "http://35.180.41.2:8000/",
    sourceCode:
      "https://github.com/amrya200t/Kalbonyan-Elmarsos/tree/main/02-Udemy/-04-Nodejs-ZTM/Projects/NASA-Mission-Control",
    image: projectImages.nasa,
    alt: "NASA Mission Control Dashboard",
    date: "Sep. 2022",
    technologies: [icons.html, icons.css, icons.react, icons.aws, icons.docker],
  },
  {
    name: "Scratch - ServerLess Stack(SST)",
    description: summary(
      "A simple note taking app. Using React.js, AWS Lambda, API Gateway, DynamoDB, and Cognito. Serverless Stack(SST)"
    ),
    tags: [
      categoriesTags.hobbies,
      categoriesTags.frontend,
      categoriesTags.backend,
    ],
    liveUrl: "https://d3dsqgx1fk2odm.cloudfront.net/",
    sourceCode:
      "https://github.com/amrya200t/Kalbonyan-Elmarsos/tree/main/04-Serverless-Stack-Project/Serverless-project",
    image: projectImages.Scratch,
    alt: "Notes app with 2 notes saved.",
    date: "Sep. 2022",
    technologies: [
      icons.html,
      icons.css,
      icons.javascript,
      icons.bootstrap,
      icons.mongodb,
      icons.aws,
      icons.node,
    ],
  },
  {
    name: "NFT School",
    description: summary(
      "An Interactive Educational Website for Non-fungible tokens (NFTs) Including a Full-stack NFT Minting App (Decentralized application)."
    ),
    tags: ["Academic", categoriesTags.frontend, categoriesTags.backend],
    liveUrl: "https://nft-school.vercel.app/",
    sourceCode: "",
    image: projectImages.NFTSchool,
    alt: "Hero Section of the NFT School website.",
    date: "Aug. 2022",
    technologies: [
      icons.html,
      icons.css,
      icons.javascript,
      icons.react,
      icons.tailwindcss,
      icons.node,
      icons.solidity,
    ],
  },
  {
    name: "Forkify",
    description: summary(
      "Recipe application with custom recipe uploads. You can bookmark your favorite recipes."
    ),
    tags: [categoriesTags.hobbies, categoriesTags.frontend],
    liveUrl: "https://whoami-forkify.netlify.app/",
    sourceCode:
      "https://github.com/amrya200t/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Forkify",
    image: projectImages.Forkify,
    alt: "Triple Smoke Burger",
    date: "Jul. 2022",
    technologies: [icons.html, icons.css, icons.javascript],
  },
  {
    name: "Omnifood",
    description: summary(
      "Omnifood is an AI-powered food subscription that will make you eat healthy again, 365 days per year. It's tailored to your personal tastes and nutritional needs."
    ),
    tags: [categoriesTags.hobbies, categoriesTags.frontend],
    liveUrl: "https://omnifood.amrezzat.com/",
    sourceCode:
      "https://github.com/amrya200t/Kalbonyan-Elmarsos/tree/main/02-Udemy/-01-HTML-CSS-Jonas/Projects/Omnifood",
    image: projectImages.omnifood,
    alt: "Hero Section of the Omnifood website.",
    date: "Apr. 2022",
    technologies: [icons.html, icons.css],
  },
  {
    name: "Bankist",
    description: summary("Bankist - When Banking meets Minimalist"),
    tags: [categoriesTags.hobbies, categoriesTags.frontend],
    liveUrl: "https://whoami-bankist-site.netlify.app/",
    sourceCode:
      "https://github.com/amrya200t/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Bankist-Site",
    image: projectImages.Bankist,
    alt: "Hero Section of the Bankist website.",
    date: "Jul. 2022",
    technologies: [icons.html, icons.css, icons.javascript],
  },
  {
    name: "Mapty",
    description: summary("Mapty // Map your workouts."),
    tags: [categoriesTags.hobbies, categoriesTags.frontend],
    liveUrl: "https://whoami-mapty.netlify.app/",
    sourceCode:
      "https://github.com/amrya200t/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Mapty",
    image: projectImages.Mapty,
    alt: "Map with workouts marks",
    date: "Jul. 2022",
    technologies: [icons.html, icons.css, icons.javascript],
  },
  {
    name: "React Meals",
    description: summary(
      "Delicious Food, Delivered To You. Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."
    ),
    tags: [categoriesTags.hobbies, categoriesTags.frontend],
    liveUrl: "https://order-food-17.netlify.app/",
    sourceCode:
      "https://github.com/amrya200t/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/order-food-app/S17-project",
    image: projectImages.ReactMeals,
    alt: "Food Menu.",
    date: "Aug. 2022",
    technologies: [icons.html, icons.css, icons.javascript, icons.react],
  },
];

export default PROJECTS_DATA;
