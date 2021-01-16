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
          <div id="slotify_tech" className="project__tech">
            <div id="slotify_html"></div>
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
          <div id="powder_tech" className="project__tech">
            <div id="powder_html"></div>
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
          <div id="casino_31_tech" className="project__tech">
            <div id="casino_31_html"></div>
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
          <div id="ultimate_fan_tech" className="project__tech">
            <div id="ultimate_fan_html"></div>
          </div>
        </div>
      </section>
    </>
  );
};
