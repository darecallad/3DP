import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  cypress,
  vue,
  tencent,
  aerospace,
  lts,
  apple,
  rawg,
  sunnychildcare,
  crypto,
  threejs,
  nike,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "cypress",
    icon: cypress,
  },
  {
    name: "vue",
    icon: vue,
  },
];

const experiences = [
  {
    title: "Front End developer - School Senior Project",
    company_name: "AeroSpace",
    icon: aerospace,
    iconBg: "#E6DEDD",
    date: "Sep 2018 - Jun 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including EE, ME team, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Boosted customer satisfaction with a 10% increase in positive user feedback, accomplished by designing and implementing a real-time tracking and location solution.",
    ],
  },
  {
    title: "IT Support Specialist",
    company_name: "LT Security",
    icon: lts,
    iconBg: "#383E56",
    date: "Aug 2020 - Dec 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Designed a breadcrumbs feature that significantly improved navigation time by 5%.",
      "Optimized company website for performance and Search Engine Optimization.",
    ],
  },
  {
    title: "Front-end Engineer",
    company_name: "Apple Inc",
    icon: apple,
    iconBg: "#E6DEDD",
    date: "April 2022 - Dec 2022",
    points: [
      "Improved user experience and interface across 5 distinct projects by developing UI using React (TypeScript) / Next.js .",
      "Increased 50% unit test coverage for a React web product by Cypress framework and passed GitLab CI pipelines.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Boosted app performance, achieving faster response times and smoother user experience, by optimizing API calls using React-Query.",
    ],
  },
  {
    title: "Front-end Engineer",
    company_name: "Tencent",
    icon: tencent,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Released the first version of the “TenCheck app” using React (TypeScript) / Node.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Contributed Vue components to Tencent's open-source T-Design System.",
      "Strengthened TenCheck's consistency and reliability, leading to reduced debugging time and increased developer productivity, through the implementation of unit tests with Cypress.",
    ],
  },
];

const projects = [
  {
    name: "Rawg.io",
    description:
      "Rawg.io is a popular gaming platform, offering a wealth of gaming resources.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Zustand",
        color: "green-text-gradient",
      },
      {
        name: "Chakra-UI",
        color: "pink-text-gradient",
      },
    ],
    image: rawg,
    source_code_link: "https://github.com/darecallad/game-hub",
  },
  {
    name: "Sunny Childcare Center",
    description:
      "Welcome to the Sunny Child Care repository. Our application is a comprehensive platform designed to provide families in the Santa Clara area with nurturing and enriching childcare services. With a focus on creating a home-like environment, we facilitate the intellectual, emotional, physical, and spiritual growth of children through our Mandarin-English immersion program.",
    tags: [
      {
        name: "Html/Css",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Dotenv",
        color: "orange-text-gradient",
      },
    ],
    image: sunnychildcare,
    source_code_link: "https://github.com/darecallad/Sunny",
  },
  {
    name: "Crytoverse",
    description:
      "The Cryptocurrency App is a web application that allows users to view real-time data on various cryptocurrencies. It leverages React for its user interface and integrates with multiple API endpoints provided by RapidAPI to fetch data such as cryptocurrency prices, historical data, news, and more.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux / Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "pink-text-gradient",
      },
      {
        name: "Ant Design",
        color: "orange-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/darecallad/Cryptocurrency",
  },
  {
    name: "Nike App",
    description:
      "NikeApp is a modern web application built using React. It leverages the latest features of React 18 and is set up with Vite for fast development and building. The project includes a robust linting setup with ESLint and styling with Tailwind CSS.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "PostCSS",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/darecallad/NikeApp",
  },
];

export { services, technologies, experiences, projects };
