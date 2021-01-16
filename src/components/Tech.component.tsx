import React from 'react';

interface TechProps {}
export const Tech: React.FC<TechProps> = (props) => {
  const stuff = [
    {
      name: 'sass',
      blurb:
        'SASS ("Syntactically Awesome Style Sheets") is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS) and adds a number of progromatic features like functions, mixins, variables, and more to make writing CSS easier.',
    },
    {
      name: 'sql',
      blurb:
        'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.',
    },
    {
      name: 'sqlite',
      blurb:
        'SQLite is a relational database management system contained in a C programming library. SQLite is not a client–server database engine and is instead embedded into the end program.',
    },
    { name: 'css3', blurb: '' },
    {
      name: 'ubuntu',
      blurb:
        'Ubuntu is a free and open source operating system and Linux distribution based on Debian. Ubuntu is the most popular operating system across public and OpenStack clouds.',
    },
    {
      name: 'vim',
      blurb:
        'Vim (Vi Improved) is a highly configurable text editor for efficiently creating and changing any kind of text directly from the CLI.',
    },
    {
      name: 'angular',
      blurb:
        'Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations.',
    },
    { name: 'react', blurb: '' },
    { name: 'jquery', blurb: '' },
    { name: 'flask', blurb: '' },
    { name: 'django', blurb: '' },
    { name: 'python', blurb: '' },
    { name: 'dotnet', blurb: '' },
    { name: 'csharp', blurb: '' },
    { name: 'nodejs', blurb: '' },
    { name: 'express', blurb: '' },
    { name: 'mongodb', blurb: '' },
    { name: 'apache', blurb: '' },
    { name: 'php', blurb: '' },
    { name: 'github', blurb: '' },
    { name: 'html5', blurb: '' },
    {
      name: 'vscode',
      blurb:
        'Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring.',
    },
  ];

  return <></>;
};
