import React from 'react';

interface ToolsProps {}
export const Tools: React.FC<ToolsProps> = (props) => {
  return (
    <>
      <section className="tools">
        <div className="tools__row">
          <div className="tools__list">
            <h2>Skills</h2>
            <p>Software Design</p>
            <p>Functional Programming</p>
            <p>Object Oriented Programming</p>
            <p>Authentication</p>
            <p>Public Speaking</p>
          </div>
          <div className="tools__list">
            <h2>Languages</h2>
            <p>JavaScript / TypeScript</p>
            <p>C#</p>
            <p>F#</p>
            <p>Python</p>
            <p>PHP</p>
          </div>
          <div className="tools__list">
            <h2>Front End</h2>
            <p>React</p>
            <p>Redux</p>
            <p>SASS</p>
            <p>Angular.io</p>
            <p>Elm</p>
          </div>
          <div className="tools__list">
            <h2>Back End</h2>
            <p>Node / Express</p>
            <p>ASP.NET Core</p>
            <p>Electron</p>
            <p>Flask</p>
            <p>Next.js</p>
          </div>
          <div className="tools__list">
            <h2>Data</h2>
            <p>MongoDB</p>
            <p>MySQL</p>
            <p>Microsoft SQL Server</p>
            <p>Redis</p>
            <p>GraphQL</p>
          </div>
          <div className="tools__list">
            <h2>ORMs / ODMs</h2>
            <p>Mongoose</p>
            <p>Entity Framework</p>
            <p>Dapper</p>
            <p>SQL Alchemy</p>
            <p>TypeORM</p>
          </div>
        </div>
      </section>
    </>
  );
};
