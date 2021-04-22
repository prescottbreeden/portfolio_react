import React from 'react';
import { BuiltWith, ProjectData } from '../types';
import { Icon } from './Icon.component';
import { ProjectTech } from './ProjectTech.component';
import { map } from '../utils';

export const Project: React.FC<ProjectData> = ({
  builtWith,
  description,
  img,
  projectName,
}) => {
  return (
    <>
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
          </div>
        </div>
        <div onClick={() => null} className="more__button">
          <div className="more__button--spacer"></div>
          <div className="more__button--box">
            <p className="more__button--box-text">Built With</p>
            <Icon className="more__button--box-icon" name="circleRight" />
          </div>
        </div>
        <div className="project__tech show-text">
          {map(
            (tech: BuiltWith) => (
              <ProjectTech {...tech} />
            ),
            builtWith
          )}
        </div>
      </div>
    </>
  );
};
