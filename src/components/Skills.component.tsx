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
            <p>Desktop Applications</p>
            <p>Authentication / Validation</p>
            <p>Data Access Layers / Microservices</p>
            <p>Data Intensive Applications</p>
            <p>Automated Testing</p>
            <p>Public Speaking</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Languages</h2>
            <p>JavaScript / TypeScript</p>
            <p>Python</p>
            <p>C# / F#</p>
            <p>Lisp / Clojure</p>
            <p>Elm</p>
            <p>Haskell</p>
            <p>PHP</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Front End</h2>
            <p>React / React Native</p>
            <p>Redux</p>
            <p>SASS (scss) / BEM</p>
            <p>Angular.io</p>
            <p>Elm</p>
            <p>jQuery</p>
            <p>HTML / CSS / JS</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Back End</h2>
            <p>Node.js / Express.js</p>
            <p>Socket.io</p>
            <p>OAuth</p>
            <p>ASP.NET Core</p>
            <p>Flask</p>
            <p>Django</p>
            <p>Next.js</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Data</h2>
            <p>MongoDB</p>
            <p>MySQL</p>
            <p>Microsoft SQL Server</p>
            <p>GraphQL</p>
            <p>Redis</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">ORMs / ODMs</h2>
            <p>Mongoose.js</p>
            <p>Entity Framework</p>
            <p>Dapper</p>
            <p>SQL Alchemy</p>
            <p>TypeORM</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Dev Tools</h2>
            <p>Git</p>
            <p>Github</p>
            <p>Azure / DevOps</p>
            <p>AWS</p>
            <p>Postman</p>
            <p>Linux / Bash / Vim</p>
          </div>
        </div>
      </section>
    </>
  );
};
