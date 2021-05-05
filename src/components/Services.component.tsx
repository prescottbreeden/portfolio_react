import React from 'react';
import primaryCube from './../assets/img/cube_primary.png';
import redCube from './../assets/img/cube_red.png';
import tealCube from './../assets/img/cube_teal.png';

interface ServicesProps {}
export const Services: React.FC<ServicesProps> = () => {
  return (
    <>
      <section className="services">
        <h2 className="services--heading">What I Do</h2>
        <div className="services--container">
          <div className="empty-space" />
          <div className="wrapper">
            <div className="services--front-end">
              <div className="cube__container">
                <h3>Front End</h3>
                <img
                  title="Skills"
                  className="cube__img"
                  src={primaryCube}
                  alt="blue cube"
                />
              </div>
              <div className="cube__text">
                <ul className="services--list">
                  <li>SPAs & Static Content</li>
                  <li>Styling & Animations</li>
                  <li>Responsive Design & Accessibility</li>
                </ul>
              </div>
            </div>
            <div className="services--backend">
              <div className="cube__container">
                <h3>Back End</h3>
                <img
                  title="Skills"
                  className="cube__img"
                  src={redCube}
                  alt="red cube"
                />
              </div>
              <div className="cube__text">
                <ul className="services--list">
                  <li>REST & GraphQL</li>
                  <li>Modeling & Data Access</li>
                  <li>Monoliths & Microservices</li>
                </ul>
              </div>
            </div>
            <div className="services--db">
              <div className="cube__container">
                <h3>Databases</h3>
                <img
                  title="Skills"
                  className="cube__img"
                  src={tealCube}
                  alt="teal cube"
                />
              </div>
              <div className="cube__text">
                <ul className="services--list">
                  <li>Database Design</li>
                  <li>SQL, NoSQL & Graph Databases</li>
                  <li>Document & Relational Mapping</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
