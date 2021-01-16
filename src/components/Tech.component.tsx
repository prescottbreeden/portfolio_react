import React from 'react';
import { Icon } from '../components/Icon.component';
import blueCube from '../assets/img/cube_primary.png';

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

  return (
    <>
      <section className="tech">
        <h2 className="tech__header">Some of My Favorite Tech</h2>
        <ul className="grid clear">
          {stuff.map((tech: any, i: number) => {
            return (
              <li className="hex-container">
                <p
                  onClick={() => null}
                  className={`hexagon img-${i} tech__animate-${i}`}
                >
                  <span className="transparent">${tech.name}</span>
                </p>
              </li>
            );
          })}
        </ul>
        <div className="tech__details">
          <div className="tech__details--container">
            <div className="tech__logo-box">
              <div className="tech__logo-pad">
                <div className="tech__logo" id="tech_image">
                  <img src={blueCube} alt="tech cube" />
                </div>
              </div>
            </div>
            <div className="tech__explain" id="blurb">
              <p>
                Click on a logo above to learn more about some of my favorite
                tech!
              </p>
            </div>
          </div>
        </div>

        <div className="site">
          <h2 className="site__header">What This Website is Built With</h2>
          <div className="site__wrapper">
            <div className="site__container">
              <div className="site__container--heading">
                <h3>Front-end</h3>
              </div>
              <div className="site__container--text-box">
                <div className="site__container--tool-box">
                  <div className="site__container--tool tool-img-1">
                    <h4 className="site__container--tool-name">HTML</h4>
                  </div>
                  <div className="site__container--tool tool-img-2">
                    <h4 className="site__container--tool-name">CSS</h4>
                  </div>
                  <div className="site__container--tool tool-img-3">
                    <h4 className="site__container--tool-name">JavaScript</h4>
                  </div>
                  <div className="site__container--tool tool-img-6">
                    <h4 className="site__container--tool-name">jQuery</h4>
                  </div>
                </div>
                <div
                  onClick={() => null}
                  id="front_end_more"
                  className="more__button"
                >
                  <div className="more__button--spacer"></div>
                  <div className="more__button--box">
                    <p className="more__button--box-text">More</p>
                    <Icon
                      className="more__button--box-icon"
                      name="circleRight"
                    />
                  </div>
                </div>
                <div id="front_end_more-box" className="site__container--text">
                  <p id="front_end_more-text" className="site__hidden-text">
                    Given the small scale of this project, a front-end framework
                    was simply not necessary. jQuery takes care of all the
                    dynamic content and the waypoints library enabled the
                    implementation of the "sticky nav-bar" effect and page
                    scrolling. HTML tags are optimized for added accessibility
                    and all CSS was built with SASS.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="site__wrapper">
            <div className="site__container">
              <div className="site__container--heading">
                <h3>Back-end</h3>
              </div>
              <div className="site__container--text-box">
                <div className="site__container--tool-box">
                  <div className="site__container--tool tool-img-8">
                    <h4 className="site__container--tool-name">Flask</h4>
                  </div>
                  <div className="site__container--tool tool-img-10">
                    <h4 className="site__container--tool-name">Python</h4>
                  </div>
                  <div className="site__container--tool tool-img-19">
                    <h4 className="site__container--tool-name">Ubuntu</h4>
                  </div>
                  <div className="site__container--tool tool-img-26">
                    <h4 className="site__container--tool-name">Nginx</h4>
                  </div>
                  <div className="site__container--tool tool-img-29">
                    <h4 className="site__container--tool-name">Gunicorn</h4>
                  </div>
                </div>
                <div
                  onClick={() => null}
                  id="back_end_more"
                  className="more__button"
                >
                  <div className="more__button--spacer"></div>
                  <div className="more__button--box">
                    <p className="more__button--box-text">More</p>
                    <Icon
                      className="more__button--box-icon"
                      name="circleRight"
                    />
                  </div>
                </div>
                <div id="back_end_more-box" className="site__container--text">
                  <p id="back_end_more-text" className="site__hidden-text">
                    I chose to use Flask as my back-end for this site because as
                    a micro-framework, Flask is unopinionated about how it is
                    structured and the tech you wish to integrate with it. I
                    went with a fairly minimalist modularization of the server
                    and opted to have just a single-route serving the site so
                    that it felt snappy and modern while also decreasing the
                    number of incoming server requests. The site is being hosted
                    on an Ubuntu server running Nginx and Gunicorn.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="site__wrapper">
            <div className="site__container">
              <div className="site__container--heading">
                <h3>Database</h3>
              </div>
              <div className="site__container--text-box">
                <div className="site__container--tool-box">
                  <div className="site__container--tool tool-img-16">
                    <h4 className="site__container--tool-name">SQLite</h4>
                  </div>
                  <div className="site__container--tool tool-img-30">
                    <h4 className="site__container--tool-name">SQLALchemy</h4>
                  </div>
                </div>
                <div
                  onClick={() => null}
                  id="database_more"
                  className="more__button"
                >
                  <div className="more__button--spacer"></div>
                  <div className="more__button--box">
                    <p className="more__button--box-text">More</p>
                    <Icon
                      className="more__button--box-icon"
                      name="circleRight"
                    />
                  </div>
                </div>
                <div id="database_more-box" className="site__container--text">
                  <p id="database_more-text" className="site__hidden-text">
                    Data and databases rock, so even though this project really
                    did not need a database (sad panda), I decided to use one to
                    store the descriptions for each tech shown above. For
                    simplicity I chose to use SQLite to take advantage of the
                    prebuilt-ORM SQLAlchemy provides Flask and the simple
                    migration features of flask-migrate. Database queries are
                    handled via AJAX calls with jQuery that return JSON data
                    back to the browser. This was a much dryer solution than
                    writing a form into each hexagon individually.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="site__wrapper">
            <div className="site__container">
              <div className="site__container--heading">
                <h3>Dev Tools</h3>
              </div>
              <div className="site__container--text-box">
                <div className="site__container--tool-box">
                  <div className="site__container--tool tool-img-7">
                    <h4 className="site__container--tool-name">SASS</h4>
                  </div>
                  <div className="site__container--tool tool-img-13">
                    <h4 className="site__container--tool-name">Node.js</h4>
                  </div>
                  <div className="site__container--tool tool-img-21">
                    <h4 className="site__container--tool-name">GitHub</h4>
                  </div>
                  <div className="site__container--tool tool-img-33">
                    <h4 className="site__container--tool-name">Vim</h4>
                  </div>
                  <div className="site__container--tool tool-img-24">
                    <h4 className="site__container--tool-name">AWS</h4>
                  </div>
                </div>
                <div
                  onClick={() => null}
                  id="dev_tools_more"
                  className="more__button"
                >
                  <div className="more__button--spacer"></div>
                  <div className="more__button--box">
                    <p className="more__button--box-text">More</p>
                    <Icon
                      className="more__button--box-icon"
                      name="circleRight"
                    />
                  </div>
                </div>
                <div id="dev_tools_more-box" className="site__container--text">
                  <p id="dev_tools_more-text" className="site__hidden-text">
                    The Node package manager (NPM) was used to install node-sass
                    and generate my watch, compile, compress, and prefix scripts
                    to streamline the CSS build process. GitHub was used for
                    version control, all writing and editing was done in Vim,
                    and the site is hosted on a free-tier server with AWS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
