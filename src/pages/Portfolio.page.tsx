import React from 'react';
import slotify from './../assets/img/slotify.png';
import powder from './../assets/img/powder_desktop.png';
import casino31 from './../assets/img/casino31.png';
import ultimateFan from './../assets/img/ultimate_fan.png';
import { Icon } from '../components/Icon.component';
import { Hexagon } from '../components/Hexagon.component';

interface PortfolioProps {}
export const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <>
      <section className="portfolio">
        <h2 className="portfolio__header">What I've Built</h2>

        <div className="project">
          <div className="project__header">
            <div className="project__header--heading-box">
              <h3 className="project__header--heading">Slotify</h3>
            </div>
            <div className="project__container--empty"></div>
          </div>
          <div className="project__container">
            <div className="project__container--desktop">
              <div className="project__desktop">
                <img
                  src={slotify}
                  alt="project web page"
                  className="project__desktop--img"
                />
              </div>
            </div>
            <div className="project__container--text-box">
              <p className="project__description--text">
                <span className="u-color-red">Slotify</span> is a video game
                music player that includes playlist creation, song/album saving,
                shuffle, repeat, option drop-down menus, searchable content, and
                other standard spotify functionalities.
              </p>
              <p className="project__description--link">
                <a
                  title="Open link to GitHub"
                  href="https://github.com/prescottbreeden/slotify"
                  rel="noreferrer"
                  target="_blank"
                >
                  View Source Code &rarr;
                </a>
              </p>
            </div>
          </div>
          <div
            onClick={() => null}
            id="slotify_button"
            className="more__button"
          >
            <div className="more__button--spacer"></div>
            <div className="more__button--box">
              <p className="more__button--box-text">Built With</p>
              <Icon className="more__button--box-icon" name="circleRight" />
            </div>
          </div>
          <div id="slotify_tech" className="project__tech show-text">
            <div id="slotify_html">
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Front-End</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="CSS" />
                  <Hexagon name="HTML" />
                  <Hexagon name="JavaScript" />
                  <Hexagon name="jQuery" />
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Back-End</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="PHP" />
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Database</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="MySQL" />
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Dev Tools</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="GitHub" />
                  <Hexagon name="SASS" />
                  <Hexagon name="Vim" />
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Server</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="Apache" />
                  <Hexagon name="AWs" />
                  <Hexagon name="Ubuntu" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project__header">
            <div className="project__header--heading-box">
              <h3 className="project__header--heading">Powder</h3>
            </div>
            <div className="project__container--empty"></div>
          </div>
          <div className="project__container">
            <div className="project__container--desktop">
              <div className="project__desktop">
                <img
                  src={powder}
                  alt="project web page"
                  className="project__desktop--img"
                />
              </div>
            </div>
            <div className="project__container--text-box">
              <p className="project__description--text">
                <span className="u-color-red">Powder</span> is a website for a
                mock heli-skiing company. Features include HTML/CSS validation
                styling, full-page expandable navagation menu, custom CSS
                float-grid, background clipping and masking, and numerous hover
                and event animations. The site is fully responsive to provide a
                smooth user experience on various device sizes.
              </p>
              <p className="project__description--link">
                <a
                  title="Open link to GitHub"
                  href="https://github.com/prescottbreeden/powder_angular"
                  rel="noreferrer"
                  target="_blank"
                >
                  View Source Code &rarr;
                </a>
              </p>
            </div>
          </div>
          <div onClick={() => null} id="powder_button" className="more__button">
            <div className="more__button--spacer"></div>
            <div className="more__button--box">
              <p className="more__button--box-text">Built With</p>
              <Icon className="more__button--box-icon" name="circleRight" />
            </div>
          </div>
          <div id="powder_tech" className="project__tech show-text">
            <div id="powder_html">
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Front-End</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="CSS" />
                  <Hexagon name="HTML" />
                  <Hexagon name="JavaScript" />
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Dev Tools</h3>
                </div>
                <div className="project__tech-row show-text">
                  <div className="site__container--tool tool-img-33">
                    <h4 className="site__container--tool-name">GitHub</h4>
                  </div>
                  <div className="site__container--tool tool-img-2">
                    <h4 className="site__container--tool-name">Node.js</h4>
                  </div>
                  <div className="site__container--tool tool-img-10">
                    <h4 className="site__container--tool-name">SASS</h4>
                  </div>
                  <div className="site__container--tool tool-img-21">
                    <h4 className="site__container--tool-name">Vim</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project__header">
            <div className="project__header--heading-box">
              <h3 className="project__header--heading">Casino 31</h3>
            </div>
            <div className="project__container--empty"></div>
          </div>
          <div className="project__container">
            <div className="project__container--desktop">
              <img
                src={casino31}
                alt="project web page"
                className="project__desktop--img"
              />
            </div>
            <div className="project__container--text-box">
              <p className="project__description--text">
                <span className="u-color-red">Casino 31</span> is a card game
                for 1-6 players. Users can play with their friends, the AI
                computer, or even just watch the computer play. Cards are served
                from an API on a seperate express server.
              </p>
              <p className="project__description--link">
                <a
                  title="Open link to GitHub"
                  href="https://github.com/prescottbreeden/_31_by_3"
                  rel="noreferrer"
                  target="_blank"
                >
                  View Source Code &rarr;
                </a>
              </p>
            </div>
          </div>
          <div
            onClick={() => null}
            id="casino_31_button"
            className="more__button"
          >
            <div className="more__button--spacer"></div>
            <div className="more__button--box">
              <p className="more__button--box-text">Built With</p>
              <Icon className="more__button--box-icon" name="circleRight" />
            </div>
          </div>
          <div id="casino_31_tech" className="project__tech show-text">
            <div id="casino_31_html">
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Front-End</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="Bootstrap" />
                  <Hexagon name="CSS" />
                  <Hexagon name="HTML" />
                  <Hexagon name="JavaScript" />
                  <Hexagon name="jQuery" />
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Game API</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="csharp" label="C#" />
                  <Hexagon name="dotnet" label=".NET Core" />
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Card API</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="JavaScript" />
                  <Hexagon name="Express" />
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Dev Tools</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="GitHub" />
                  <Hexagon name="nodejs" label="Node.js" />
                  <Hexagon name="SASS" />
                  <Hexagon name="vscode" label="VS Code" />
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Servers</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="AWS" />
                  <Hexagon name="Nginx" />
                  <Hexagon name="Supervisor" />
                  <Hexagon name="Ubuntu" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project__header">
            <div className="project__header--heading-box">
              <h3 className="project__header--heading">Ultimate Fan</h3>
            </div>
            <div className="project__container--empty"></div>
          </div>
          <div className="project__container">
            <div className="project__container--desktop">
              <img
                src={ultimateFan}
                alt="project web page"
                className="project__desktop--img"
              />
            </div>
            <div className="project__container--text-box">
              <p className="project__description--text">
                <span className="u-color-red">Ultimate Fan</span> is a website
                that tests users about their knowledge of athletes from selected
                categories. All trivia questions were generated via web scraping
                and data visualization is powered by Chart.js.
              </p>
              <p className="project__description--link">
                <a
                  title="Open link to GitHub"
                  href="https://github.com/prescottbreeden/ultimate_fan_project"
                  rel="noreferrer"
                  target="_blank"
                >
                  View Source Code &rarr;
                </a>
              </p>
            </div>
          </div>
          <div
            onClick={() => null}
            id="ultimate_fan_button"
            className="more__button"
          >
            <div className="more__button--spacer"></div>
            <div className="more__button--box">
              <p className="more__button--box-text">Built With</p>
              <Icon className="more__button--box-icon" name="circleRight" />
            </div>
          </div>
          <div id="ultimate_fan_tech" className="project__tech show-text">
            <div id="ultimate_fan_html">
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Front-End</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="CSS" />
                  <Hexagon name="HTML" />
                  <Hexagon name="JavaScript" />
                  <Hexagon name="jQuery" />
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Back-End</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="Python" />
                  <Hexagon name="Django" />
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Database</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="SQLite" />
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Dev Tools</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="Github" />
                  <Hexagon name="nodejs" label="Node.js" />
                  <Hexagon name="SASS" />
                  <Hexagon name="vim" />
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Server</h3>
                </div>
                <div className="project__tech-row show-text">
                  <Hexagon name="AWS" />
                  <Hexagon name="Nginx" />
                  <Hexagon name="Gunicorn" />
                  <Hexagon name="Ubuntu" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
