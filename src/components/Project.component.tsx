import React from 'react';
import { ProjectData } from '../types';
import { map, maybe, randomString } from '../utils';
import { Hexagon } from './Hexagon.component';
import { Icon } from './Icon.component';

export const Project: React.FC<ProjectData> = ({
  builtWith,
  description,
  id,
  img,
  projectName,
  sourceCodeLink,
}) => {
  return (
    <React.Fragment key={id}>
      <div className="project">
        <div className="project__header">
          <div className="project__header--heading-box">
            <h3 className="project__header--heading">{projectName}</h3>
          </div>
          <div className="project__container--empty"></div>
        </div>
        <div className="project__container">
          <div className="project__container--desktop">
            <div className="project__desktop">
              <img
                src={img}
                alt="project web page"
                className="project__desktop--img"
              />
            </div>
          </div>
          <div className="project__container--text-box">
            <p className="project__description--text">
              <span className="u-color-red">{projectName}</span>
              {description}
            </p>
            <p className="project__description--link">
              {sourceCodeLink ? (
                <a
                  title="Open link to GitHub"
                  href="https://github.com/prescottbreeden/slotify"
                  rel="noreferrer"
                  target="_blank"
                >
                  View Source Code &rarr;
                </a>
              ) : null}
            </p>
          </div>
        </div>
        <div onClick={() => null} id="slotify_button" className="more__button">
          <div className="more__button--spacer"></div>
          <div className="more__button--box">
            <p className="more__button--box-text">Built With</p>
            <Icon className="more__button--box-icon" name="circleRight" />
          </div>
        </div>
        <div id="slotify_tech" className="project__tech show-text">
          <div id="slotify_html">
            {maybe(builtWith)
              .map(
                map(({ title, tech }: any) => {
                  return (
                    <React.Fragment key={randomString()}>
                      <div className="more__container">
                        <div className="more__container--heading">
                          <h3>{title}</h3>
                        </div>
                        <div className="project__tech-row show-text">
                          {tech.map(({ label, name }: any) => {
                            return (
                              <React.Fragment key={randomString()}>
                                <Hexagon name={name} label={label} />
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })
              )
              .join()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
