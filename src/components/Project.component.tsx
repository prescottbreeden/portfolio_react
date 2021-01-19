import React from 'react';
import slotify from './../assets/img/slotify.png';
import { Icon } from '../components/Icon.component';
import { Link } from 'react-router-dom';

interface ProjectProps {}
export const Project: React.FC<ProjectProps> = (props) => {
  return (
    <>
      <div className="project">
        <div className="project__header">
          <div className="project__header--heading-box">
            <h3 className="project__header--heading">Slotify</h3>
          </div>
          <div className="project__container--empty" />
        </div>
        <div className="project__description">
          <p>
            <span className="u-color-red">Slotify</span> is a Spotify re-skin
            that contains a large video game music library. Functionality
            includes encrypted authentication, playlist creation, song/album
            saving, shuffle, repeat, option menus with actions and share links,
            searchable content, and other standard spotify functionalities.
          </p>
          <a
            className="project__link"
            title="Open link to GitHub"
            href="https://github.com/prescottbreeden/slotify"
            rel="noreferrer"
            target="_blank"
          >
            View Source Code &rarr;
          </a>
        </div>
        {/* <div */}
        {/*   onClick={() => null} */}
        {/*   id="slotify_button" */}
        {/*   className="more__button" */}
        {/* > */}
        {/* <div className="more__button--spacer"></div> */}
        {/* <div className="more__button--box"> */}
        {/*   <p className="more__button--box-text">Built With</p> */}
        {/*   <Icon className="more__button--box-icon" name="circleRight" /> */}
        {/* </div> */}
        {/* </div> */}
        <div className="project__container">
          <img
            src={slotify}
            alt="Slotify album playlist"
            className="project__image"
          />
          <div className="project__technology">
            <div className="project-tech">
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Front-End</h3>
                </div>
                <div className="project-tech__row">
                  <div className="site__container--tool tool-img-23">
                    <h4 className="site__container--tool-name">CSS</h4>
                  </div>
                  <div className="site__container--tool tool-img-26">
                    <h4 className="site__container--tool-name">HTML</h4>
                  </div>
                  <div className="site__container--tool tool-img-1">
                    <h4 className="site__container--tool-name">JavaScript</h4>
                  </div>
                  <div className="site__container--tool tool-img-35">
                    <h4 className="site__container--tool-name">jQuery</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-tech">
              <div className="more__container">
                <div className="more__container--heading">
                  <h3>Front-End</h3>
                </div>
                <div className="project-tech__row">
                  <div className="site__container--tool tool-img-23">
                    <h4 className="site__container--tool-name">CSS</h4>
                  </div>
                  <div className="site__container--tool tool-img-26">
                    <h4 className="site__container--tool-name">HTML</h4>
                  </div>
                  <div className="site__container--tool tool-img-1">
                    <h4 className="site__container--tool-name">JavaScript</h4>
                  </div>
                  <div className="site__container--tool tool-img-35">
                    <h4 className="site__container--tool-name">jQuery</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
