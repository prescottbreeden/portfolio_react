import React from 'react';

interface ToolsProps {}
export const Tools: React.FC<ToolsProps> = (props) => {
  return (
    <>
      <section className="tools">
        <div className="tools__row">
          <div className="tools__list">
            <h2 className="tools__list__title">Skills</h2>
            <p>Authentication / Validation</p>
            <p>Automated Testing</p>
            <p>Data Access Layers / Microservices</p>
            <p>Data Intensive Applications</p>
            <p>Desktop Applications</p>
            <p>Dynamic Website Content</p>
            <p>Public Speaking</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Languages</h2>
            <p>C# / F#</p>
            <p>Haskell</p>
            <p>JavaScript</p>
            <p>Common Lisp</p>
            <p>Python</p>
            <p>Scala</p>
            <p>TypeScript</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Front End</h2>
            <p>Angular.io</p>
            <p>Elm</p>
            <p>HTML / CSS / JS</p>
            <p>React / React Native</p>
            <p>Redux</p>
            <p>SASS (scss) / BEM</p>
            <p>jQuery</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Back End</h2>
            <p>.NET Core</p>
            <p>Django</p>
            <p>Flask</p>
            <p>Next.js</p>
            <p>Node.js / Express.js</p>
            <p>OAuth</p>
            <p>Socket.io</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Data</h2>
            <p>GraphQL</p>
            <p>Microsoft SQL Server</p>
            <p>MongoDB</p>
            <p>MySQL</p>
            <p>Redis</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">ORMs / ODMs</h2>
            <p>Dapper</p>
            <p>Entity Framework</p>
            <p>Mongoose.js</p>
            <p>SQL Alchemy</p>
            <p>TypeORM</p>
          </div>
          <div className="tools__list">
            <h2 className="tools__list__title">Dev Tools</h2>
            <p>AWS</p>
            <p>Azure / DevOps</p>
            <p>Github</p>
            <p>Linux / Bash / Vim</p>
            <p>Postman</p>
          </div>
        </div>
      </section>
    </>
  );
};
