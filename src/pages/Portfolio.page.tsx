import React from 'react';
import slotify from './../assets/img/slotify.png';
import powder from './../assets/img/powder_desktop.png';
import casino31 from './../assets/img/casino31.png';
import ultimateFan from './../assets/img/ultimate_fan.png';
import { Icon } from '../components/Icon.component';

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
                  <div className="site__container--tool tool-img-3">
                    <h4 className="site__container--tool-name">CSS</h4>
                  </div>
                  <div className="site__container--tool tool-img-14">
                    <h4 className="site__container--tool-name">HTML</h4>
                  </div>
                  <div className="site__container--tool tool-img-15">
                    <h4 className="site__container--tool-name">JavaScript</h4>
                  </div>
                  <div className="site__container--tool tool-img-35">
                    <h4 className="site__container--tool-name">jQuery</h4>
                  </div>
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Back-End</h3>
                </div>
                <div className="project__tech-row show-text">
                  <div className="site__container--tool tool-img-37">
                    <h4 className="site__container--tool-name">PHP</h4>
                  </div>
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Database</h3>
                </div>
                <div className="project__tech-row show-text">
                  <div className="site__container--tool tool-img-20">
                    <h4 className="site__container--tool-name">MySQL</h4>
                  </div>
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
                  <div className="site__container--tool tool-img-25">
                    <h4 className="site__container--tool-name">SASS</h4>
                  </div>
                  <div className="site__container--tool tool-img-28">
                    <h4 className="site__container--tool-name">Vim</h4>
                  </div>
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Server</h3>
                </div>
                <div className="project__tech-row show-text">
                  <div className="site__container--tool tool-img-29">
                    <h4 className="site__container--tool-name">Apache</h4>
                  </div>
                  <div className="site__container--tool tool-img-30">
                    <h4 className="site__container--tool-name">AWS</h4>
                  </div>
                  <div className="site__container--tool tool-img-27">
                    <h4 className="site__container--tool-name">Ubuntu</h4>
                  </div>
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
                {/* <a */}
                {/*   title="Open link to Website" */}
                {/*   href="http://13.58.172.1/" */}
                {/*   target="_blank" */}
                {/* > */}
                {/*   Visit Website &rarr; */}
                {/* </a> */}
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
                  <div className="site__container--tool tool-img-3">
                    <h4 className="site__container--tool-name">CSS</h4>
                  </div>
                  <div className="site__container--tool tool-img-14">
                    <h4 className="site__container--tool-name">HTML</h4>
                  </div>
                  <div className="site__container--tool tool-img-15">
                    <h4 className="site__container--tool-name">JavaScript</h4>
                  </div>
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
                  <div className="site__container--tool tool-img-21">
                    <h4 className="site__container--tool-name">Node.js</h4>
                  </div>
                  <div className="site__container--tool tool-img-25">
                    <h4 className="site__container--tool-name">SASS</h4>
                  </div>
                  <div className="site__container--tool tool-img-28">
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
                  <div className="site__container--tool tool-img-31">
                    <h4 className="site__container--tool-name">Bootstrap</h4>
                  </div>
                  <div className="site__container--tool tool-img-3">
                    <h4 className="site__container--tool-name">CSS</h4>
                  </div>
                  <div className="site__container--tool tool-img-14">
                    <h4 className="site__container--tool-name">HTML</h4>
                  </div>
                  <div className="site__container--tool tool-img-15">
                    <h4 className="site__container--tool-name">JavaScript</h4>
                  </div>
                  <div className="site__container--tool tool-img-35">
                    <h4 className="site__container--tool-name">jQuery</h4>
                  </div>
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Game API</h3>
                </div>
                <div className="project__tech-row show-text">
                  <div className="site__container--tool tool-img-2">
                    <h4 className="site__container--tool-name">C#</h4>
                  </div>
                  <div className="site__container--tool tool-img-5">
                    <h4 className="site__container--tool-name">.NET Core</h4>
                  </div>
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Card API</h3>
                </div>
                <div className="project__tech-row show-text">
                  <div className="site__container--tool tool-img-15">
                    <h4 className="site__container--tool-name">JavaScript</h4>
                  </div>
                  <div className="site__container--tool tool-img-8">
                    <h4 className="site__container--tool-name">Express</h4>
                  </div>
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
                  <div className="site__container--tool tool-img-21">
                    <h4 className="site__container--tool-name">Node.js</h4>
                  </div>
                  <div className="site__container--tool tool-img-25">
                    <h4 className="site__container--tool-name">SASS</h4>
                  </div>
                  <div className="site__container--tool tool-img-39">
                    <h4 className="site__container--tool-name">VS Code</h4>
                  </div>
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Servers</h3>
                </div>
                <div className="project__tech-row show-text">
                  <div className="site__container--tool tool-img-30">
                    <h4 className="site__container--tool-name">AWS</h4>
                  </div>
                  <div className="site__container--tool tool-img-36">
                    <h4 className="site__container--tool-name">Nginx</h4>
                  </div>
                  <div className="site__container--tool tool-img-38">
                    <h4 className="site__container--tool-name">Supervisor</h4>
                  </div>
                  <div className="site__container--tool tool-img-27">
                    <h4 className="site__container--tool-name">Ubuntu</h4>
                  </div>
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
                  <div className="site__container--tool tool-img-3">
                    <h4 className="site__container--tool-name">CSS</h4>
                  </div>
                  <div className="site__container--tool tool-img-14">
                    <h4 className="site__container--tool-name">HTML</h4>
                  </div>
                  <div className="site__container--tool tool-img-15">
                    <h4 className="site__container--tool-name">JavaScript</h4>
                  </div>
                  <div className="site__container--tool tool-img-35">
                    <h4 className="site__container--tool-name">jQuery</h4>
                  </div>
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Back-End</h3>
                </div>
                <div className="project__tech-row show-text">
                  <div className="site__container--tool tool-img-22">
                    <h4 className="site__container--tool-name">Python</h4>
                  </div>
                  <div className="site__container--tool tool-img-32">
                    <h4 className="site__container--tool-name">Django</h4>
                  </div>
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Database</h3>
                </div>
                <div className="project__tech-row show-text">
                  <div className="site__container--tool tool-img-40">
                    <h4 className="site__container--tool-name">SQLite</h4>
                  </div>
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
                  <div className="site__container--tool tool-img-21">
                    <h4 className="site__container--tool-name">Node.js</h4>
                  </div>
                  <div className="site__container--tool tool-img-25">
                    <h4 className="site__container--tool-name">SASS</h4>
                  </div>
                  <div className="site__container--tool tool-img-28">
                    <h4 className="site__container--tool-name">Vim</h4>
                  </div>
                </div>
              </div>
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Server</h3>
                </div>
                <div className="project__tech-row show-text">
                  <div className="site__container--tool tool-img-30">
                    <h4 className="site__container--tool-name">AWS</h4>
                  </div>
                  <div className="site__container--tool tool-img-36">
                    <h4 className="site__container--tool-name">Nginx</h4>
                  </div>
                  <div className="site__container--tool tool-img-34">
                    <h4 className="site__container--tool-name">Gunicorn</h4>
                  </div>
                  <div className="site__container--tool tool-img-27">
                    <h4 className="site__container--tool-name">Ubuntu</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
