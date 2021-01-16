import React from 'react';
import primaryCube from './../assets/img/cube_primary.png';
import redCube from './../assets/img/cube_red.png';
import tealCube from './../assets/img/cube_teal.png';

interface HomeProps {}
export const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <section className="about">
        <div className="about__text-box">
          <h2 className="about__heading">Who I Am</h2>
          <p className="about__blurb">
            There is nothing - absolutely nothing - half so much worth doing as
            simply messing about in code. It has the science I crave as a
            published research scientist. It is a bottomless pit of learning
            that I crave as a teacher. There is the art of it that my background
            as an opera singer thrives on and reminds me that programming is a
            craft like any great art form. And most importantly: there is the
            human factor, from the friendships of your teammates to the
            importance of improving the human experience in pragmatic, direct
            ways. In a nutshell, I am a programmer. I am a full-stack software
            engineer that specializes in JavaScript, Node, and React. I am
            proficient in Microsoft stacks using C# and F#. I have experience
            designing SQL, noSQL, and GraphQL data architecture. I am an
            open-source contributor. I am passionate about software design and
            functional programming, and from time to time, I like to blog about
            it.
          </p>
        </div>
      </section>
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
                  <li>Responsive Layouts</li>
                  <li>Styling and Animations</li>
                  <li>Front-end Architecture</li>
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
                  <li>MVC Architecture</li>
                  <li>Restful API Design</li>
                  <li>Object Relational Mapping</li>
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
                  <li>SQL Databases</li>
                  <li>NoSQL Databases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
