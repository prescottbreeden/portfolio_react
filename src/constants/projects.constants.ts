import slotify from './../assets/img/slotify.png';
import powder from './../assets/img/powder_desktop.png';
import casino31 from './../assets/img/casino31.png';
import ultimateFan from './../assets/img/ultimate_fan.png';
import { BuiltWith, ProjectData } from '../types';

const CASINO_31: BuiltWith[] = [
  {
    title: 'front-end',
    tech: [
      { name: 'elm', label: 'Elm' },
      { name: 'sass', label: 'SASS' },
    ],
  },
  {
    title: 'data access',
    tech: [
      { name: 'fsharp', label: 'F#' },
      { name: 'dotnet', label: '.NET Core' },
    ],
  },
  {
    title: 'user api',
    tech: [
      { name: 'express', label: 'Express' },
      { name: 'mongodb', label: 'MongoDB' },
      { name: 'mongoose', label: 'Mongoose' },
      { name: 'redis', label: 'Redis' },
      { name: 'typescript', label: 'TypeScript' },
    ],
  },
  {
    title: 'game api',
    tech: [
      { name: 'csharp', label: 'C#' },
      { name: 'dotnet', label: '.NET Core' },
    ],
  },
  {
    title: 'card api',
    tech: [
      { name: 'express', label: 'Express' },
      { name: 'javascript', label: 'JavaScript' },
      { name: 'redis', label: 'Redis' },
    ],
  },
];

const CCCS = [
  {
    title: 'front-end',
    tech: [
      { name: 'javascript', label: 'JavaScript' },
      { name: 'nodejs', label: 'Node.js' },
      { name: 'react', label: 'React' },
      { name: 'redux', label: 'Redux' },
      { name: 'sass', label: 'SASS' },
    ],
  },
  {
    title: 'back-end',
    tech: [
      { name: 'csharp', label: 'C#' },
      { name: 'mssql', label: 'MSSql' },
      { name: 'dotnet', label: '.Net Core' },
    ],
  },
];

const DE_FORMED = [
  {
    title: 'tools',
    tech: [
      { name: 'react', label: 'React' },
      { name: 'javascript', label: 'JavaScript' },
      { name: 'nodejs', label: 'Node.js' },
    ],
  },
];

const MY_DEV_BUDDY = [
  {
    title: 'front-end',
    tech: [
      { name: 'css', label: 'CSS' },
      { name: 'react', label: 'React' },
      { name: 'redux', label: 'Redux' },
      { name: 'sass', label: 'SASS' },
    ],
  },
  {
    title: 'back-end',
    tech: [
      { name: 'electron', label: 'Electron' },
      { name: 'javascript', label: 'JavaScript' },
    ],
  },
  {
    title: 'other',
    tech: [
      { name: 'teams', label: 'Teams App' },
      { name: 'azure', label: 'DevOps' },
    ],
  },
];

const POWDER = [
  {
    title: 'front-end',
    tech: [
      { name: 'css', label: 'CSS' },
      { name: 'html', label: 'HTML' },
      { name: 'javascript', label: 'JavaScript' },
      { name: 'sass', label: 'SASS' },
    ],
  },
];

const SLOTIFY = [
  {
    title: 'front-end',
    tech: [
      { name: 'css', label: 'CSS' },
      { name: 'html', label: 'HTML' },
      { name: 'javascript', label: 'JavaScript' },
      { name: 'jquery', label: 'jQuery' },
      { name: 'sass', label: 'SASS' },
    ],
  },
  {
    title: 'back-end',
    tech: [
      { name: 'apache', label: 'Apache' },
      { name: 'php', label: 'PHP' },
      { name: 'mysql', label: 'MySQL' },
    ],
  },
];

const ULTIMATE_FAN = [
  {
    title: 'front-end',
    tech: [
      { name: 'html', label: 'HTML' },
      { name: 'javascript', label: 'JavaScript' },
      { name: 'jquery', label: 'jQuery' },
      { name: 'sass', label: 'SASS' },
    ],
  },
  {
    title: 'back-end',
    tech: [
      { name: 'django', label: 'Django' },
      { name: 'python', label: 'Python' },
      { name: 'sqlite', label: 'SQLite' },
    ],
  },
];

export const PROJECTS: ProjectData[] = [
  {
    description:
      ' is a web application that handles all of the school, student, program, and grant data for the entire state. This project was a rebuild of their previous 20 year old system and stands as the largest monolith I have ever worked on. As a green-field project that grew to more than 200k lines of code, this project taught me incredibly valuable lessons about unscalable patterns that are difficult to change, how leaning on E2E and snapshot tests over unit and integration tests failed to prevent serious regression bugs, how caching can turn into your worst nightmare, how an over-reliance on component libraries can leave you clawing to meet a11y requirements, the problems with a monolith that has asymetrical scaling needs in production, how forcing features with vastly different data requirements into a single monolith can devestate performance, and how scrum can go very, very wrong. However, despite the seniors and scrum masters digging our graves, the rest of the team made coming to work every day an absolute joy and were a constant inspiration to work with. I feel thankful for the opportunity to build such an important application for thousands of educators.',
    id: 'deformed',
    img: slotify,
    projectName: 'Colorado Community College System',
    builtWith: CCCS,
  },
  {
    description:
      ' is an NPM library for creating modular, function-based validation schemas that are de-coupled from their surrounding implementations. I wrote this package for a project with the Colorado Community College System that involved thousands of forms to manage all school, student, and grant data for the entire state. There simply was no decent composable validation solution that would allow for easy unit testing as well as re-use outside the context of forms (such as during application submission pages). Currently the library has implementations for the validations in VanillaJS for Node applications and in React as a React Hook.',
    id: 'deformed',
    img: slotify,
    projectName: '@De-Formed Validations',
    builtWith: DE_FORMED,
  },
  {
    description:
      ' is a desktop application to import tickets from Azure DevOps to create a manageable TODO list with time tracking functionality. After several months working intensely with DevOps on a client project, I wanted a way to better track my work and efforts and was inspired to build this over a weekend. CSV files exported from Azure DevOps and dropped into the application to populate tickets with detailed information, such as ticket numbers, descriptions, and other meta data.',
    id: 'mydevbuddy',
    img: slotify,
    projectName: 'My Dev Buddy',
    builtWith: MY_DEV_BUDDY,
  },
  {
    description:
      ' is a video game music player that includes playlist creation, song/album saving, shuffle, repeat, option drop-down menus, searchable content, and other standard spotify functionalities. This was a personal project inspired by a challenge to build a modern application in an old school way. While the end-product was terrific (so much that I had to take it down from its server because my friends and students were streaming so much audio), it definitely gave me a greater appreciation for more modern toolding.',
    id: 'slotify',
    img: slotify,
    projectName: 'Slotify',
    builtWith: SLOTIFY,
  },
  {
    description:
      ' is a static website for a mock heli-skiing company. Features include HTML/CSS validation styling, full-page expandable navagation menu, custom CSS float-grid, background clipping and masking, and numerous hover and event animations. The site is fully responsive to provide a smooth user experience on various device sizes. This personal project was the culmination of an advanced course on SASS and CSS and was inspired by feeling defeated at how ugly many of my projects were no matter how slick the back-end code was. Ultimately it served as a major spring board for my enjoyment of front-end work.',
    id: 'powder',
    img: powder,
    projectName: 'Powder',
    builtWith: POWDER,
  },
  {
    description:
      " is a card game for 1-6 players. Users can play with their friends, the AI computer, or even just watch the computer play against itself (a la War Games). This project started as a collaborative project when I was a student at Coding Dojo. Initially it was two servers, a C# with Razor web application that was fed playing cards from an API on a seperate express server. Ironically, the choice for a second server was due to a time constraint to get the project to production after hitting a bug in Razor not consistently updated card information after JavaScript updated the DOM. Years later, I revisted this project to use it as a plaground for an idea I had for a client application. The Elm front-end communicates to an F# data access layer to have a rich Domain Driven Design and act as the hub for various microservices: user data, card data, and game logic. This is an ongoing personal project that has taught me many lessons and hardships of disperate tech stacks and microservices, however it's quite fun to hack at.",
    id: 'casino31',
    img: casino31,
    projectName: 'Casino 31',
    builtWith: CASINO_31,
  },
  {
    description:
      ' is a web app that challenges users on trivia questions scraped from the web using Python. The app offered data visualization for players to see how they stacked up across 10 different categories from kung fu to history. This project was created during my first hackathon. The biggest challenge was in generating triva questions by simply scouring wiki pages from various sources and then doing a search and replace to swap out the names (i.e. answers) with blank underscores. So if I was scraping a page that had .../michaeljackson/... in the url, it would search for text that included one instance of the name and then replace it with underscores. My focus was on the web-scraper and Django app and my parter focused on the data visualization. I later went back and used the project to apply some of the skills I learned with Sass to give it a much needed makeover.',
    id: 'ultimatefan',
    img: ultimateFan,
    projectName: 'Ultimate Fan',
    builtWith: ULTIMATE_FAN,
  },
];
