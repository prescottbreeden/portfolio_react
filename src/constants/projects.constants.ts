import slotify from './../assets/img/slotify.png';
import powder from './../assets/img/powder_desktop.png';
import casino31 from './../assets/img/casino31.png';
import ultimateFan from './../assets/img/ultimate_fan.png';
import { BuiltWith, ProjectData } from '../types';

const CASINO_31: BuiltWith[] = [
  {
    title: 'front-end',
    tech: [
      { name: 'bootstrap', label: 'Bootstrap' },
      { name: 'css', label: 'CSS' },
      { name: 'html', label: 'HTML' },
      { name: 'javascript', label: 'JavaScript' },
      { name: 'jquery', label: 'jQuery' },
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
      { name: 'javascript', label: 'JavaScript' },
      { name: 'typescript', label: 'TypeScript' },
      { name: 'nodejs', label: 'Node.js' },
      { name: 'express', label: 'Express' },
      { name: 'mongodb', label: 'MongoDB' },
      { name: 'mongoose', label: 'Mongoose' },
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
      { name: 'javascript', label: 'JavaScript' },
      { name: 'express', label: 'Express' },
    ],
  },
  {
    title: 'dev tools',
    tech: [
      { name: 'github', label: 'GitHub' },
      { name: 'nodejs', label: 'Node.js' },
      { name: 'sass', label: 'SASS' },
      { name: 'vim', label: 'Vim' },
    ],
  },
  {
    title: 'servers',
    tech: [
      { name: 'aws', label: 'AWS' },
      { name: 'nginx', label: 'Nginx' },
      { name: 'supervisor', label: 'Supervisor' },
      { name: 'ubuntu', label: 'Ubuntu' },
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
    ],
  },
  {
    title: 'dev tools',
    tech: [
      { name: 'github', label: 'GitHub' },
      { name: 'nodejs', label: 'Node.js' },
      { name: 'sass', label: 'SASS' },
      { name: 'vim', label: 'Vim' },
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
    ],
  },
  {
    title: 'back-end',
    tech: [{ name: 'php', label: 'PHP' }],
  },
  {
    title: 'database',
    tech: [{ name: 'mysql', label: 'MySQL' }],
  },
  {
    title: 'dev tools',
    tech: [
      { name: 'github', label: 'GitHub' },
      { name: 'sass', label: 'SASS' },
      { name: 'vim', label: 'Vim' },
    ],
  },
  {
    title: 'server',
    tech: [
      { name: 'apache', label: 'Apache' },
      { name: 'aws', label: 'AWS' },
      { name: 'ubuntu', label: 'Ubuntu' },
    ],
  },
];

const ULTIMATE_FAN = [
  {
    title: 'front-end',
    tech: [
      { name: 'css', label: 'CSS' },
      { name: 'html', label: 'HTML' },
      { name: 'javascript', label: 'JavaScript' },
      { name: 'jquery', label: 'jQuery' },
    ],
  },
  {
    title: 'back-end',
    tech: [
      { name: 'python', label: 'Python' },
      { name: 'django', label: 'Django' },
    ],
  },
  {
    title: 'database',
    tech: [{ name: 'sqlite', label: 'SQLite' }],
  },
  {
    title: 'dev tools',
    tech: [
      { name: 'github', label: 'GitHub' },
      { name: 'nodejs', label: 'Node.js' },
      { name: 'sass', label: 'SASS' },
      { name: 'vim', label: 'Vim' },
    ],
  },
  {
    title: 'server',
    tech: [
      { name: 'aws', label: 'AWS' },
      { name: 'gunicorn', label: 'Gunicorn' },
      { name: 'nginx', label: 'Nginx' },
      { name: 'ubuntu', label: 'Ubuntu' },
    ],
  },
];

export const PROJECTS: ProjectData[] = [
  {
    description:
      ' is a video game music player that includes playlist creation, song/album saving, shuffle, repeat, option drop-down menus, searchable content, and other standard spotify functionalities.',
    id: 'slotify',
    img: slotify,
    projectName: 'Slotify',
    builtWith: SLOTIFY,
  },
  {
    description:
      ' is a website for a mock heli-skiing company. Features include HTML/CSS validation styling, full-page expandable navagation menu, custom CSS float-grid, background clipping and masking, and numerous hover and event animations. The site is fully responsive to provide a smooth user experience on various device sizes.',
    id: 'powder',
    img: powder,
    projectName: 'Powder',
    builtWith: POWDER,
  },
  {
    description:
      ' is a card game for 1-6 players. Users can play with their friends, the AI computer, or even just watch the computer play. Cards are served from an API on a seperate express server.',
    id: 'casino31',
    img: casino31,
    projectName: 'Casino 31',
    builtWith: CASINO_31,
  },
  {
    description:
      ' is a card game for 1-6 players. Users can play with their friends, the AI computer, or even just watch the computer play. Cards are served from an API on a seperate express server.',
    id: 'ultimatefan',
    img: ultimateFan,
    projectName: 'Ultimate Fan',
    builtWith: ULTIMATE_FAN,
  },
];
