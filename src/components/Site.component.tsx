import React from 'react';
import { Icon } from './Icon.component';

interface SiteProps {}
export const Site: React.FC<SiteProps> = (props) => {
  return (
    <>
      <div className="site">
        <h2 className="site__header">What This Website is Built With</h2>
        <div className="site__wrapper">
          <div className="site__container">
            <div className="site__container--heading">
              <h3>Front-end</h3>
            </div>
            <div className="site__container--text-box">
              <div className="site__container--tool-box">
                <div className="site__container--tool tool-img-14">
                  <h4 className="site__container--tool-name">HTML</h4>
                </div>
                <div className="site__container--tool tool-img-3">
                  <h4 className="site__container--tool-name">CSS</h4>
                </div>
                <div className="site__container--tool tool-img-15">
                  <h4 className="site__container--tool-name">JavaScript</h4>
                </div>
                <div className="site__container--tool tool-img-23">
                  <h4 className="site__container--tool-name">React</h4>
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
                  <Icon className="more__button--box-icon" name="circleRight" />
                </div>
              </div>
              <div id="front_end_more-box" className="site__container--text">
                <p id="front_end_more-text" className="site__hidden-text">
                  Given the small scale of this project, a front-end framework
                  was simply not necessary. jQuery takes care of all the dynamic
                  content and the waypoints library enabled the implementation
                  of the "sticky nav-bar" effect and page scrolling. HTML tags
                  are optimized for added accessibility and all CSS was built
                  with SASS.
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
                <div className="site__container--tool tool-img-9">
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
                  <Icon className="more__button--box-icon" name="circleRight" />
                </div>
              </div>
              <div id="back_end_more-box" className="site__container--text">
                <p id="back_end_more-text" className="site__hidden-text">
                  I chose to use Flask as my back-end for this site because as a
                  micro-framework, Flask is unopinionated about how it is
                  structured and the tech you wish to integrate with it. I went
                  with a fairly minimalist modularization of the server and
                  opted to have just a single-route serving the site so that it
                  felt snappy and modern while also decreasing the number of
                  incoming server requests. The site is being hosted on an
                  Ubuntu server running Nginx and Gunicorn.
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
                  <Icon className="more__button--box-icon" name="circleRight" />
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
                  handled via AJAX calls with jQuery that return JSON data back
                  to the browser. This was a much dryer solution than writing a
                  form into each hexagon individually.
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
                  <Icon className="more__button--box-icon" name="circleRight" />
                </div>
              </div>
              <div id="dev_tools_more-box" className="site__container--text">
                <p id="dev_tools_more-text" className="site__hidden-text">
                  The Node package manager (NPM) was used to install node-sass
                  and generate my watch, compile, compress, and prefix scripts
                  to streamline the CSS build process. GitHub was used for
                  version control, all writing and editing was done in Vim, and
                  the site is hosted on a free-tier server with AWS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
