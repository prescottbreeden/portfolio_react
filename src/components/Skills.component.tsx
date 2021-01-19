import React from 'react';

interface ToolsProps {}
export const Tools: React.FC<ToolsProps> = (props) => {
  return (
    <>
      <section className="tools">
        <div className="tools__row">
          <div className="tools__list">
            <h2 className="tools__list__title">Skills</h2>
            <p>Dynamic Website Content</p>
            <p>State Management</p>
            <p>Authentication & Validation</p>
            <p>Data Access Layers / Microservices</p>
            <p>Public Speaking</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Languages</h2>
            <p>JavaScript / TypeScript</p>
            <p>C#</p>
            <p>F#</p>
            <p>Python</p>
            <p>PHP</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Front End</h2>
            <p>React</p>
            <p>Redux</p>
            <p>SASS</p>
            <p>Angular.io</p>
            <p>Elm</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Back End</h2>
            <p>Node / Express</p>
            <p>ASP.NET Core</p>
            <p>Electron</p>
            <p>Flask</p>
            <p>Next.js</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Data</h2>
            <p>MongoDB</p>
            <p>MySQL</p>
            <p>Microsoft SQL Server</p>
            <p>Redis</p>
            <p>GraphQL</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">ORMs / ODMs</h2>
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
