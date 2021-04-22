import React from 'react';
import { BuiltWith, HexagonProps } from '../types';
import { map, randomString } from '../utils';
import { Hexagon } from './Hexagon.component';

export const ProjectTech: React.FC<BuiltWith> = ({ title, tech }) => {
  return (
    <>
      <div className="more__container">
        <div className="more__container--heading">
          <h3>{title}</h3>
        </div>
        <div className="project__tech-row show-text">
          {map(
            (hexagonProps: HexagonProps) => (
              <Hexagon {...hexagonProps} key={randomString()} />
            ),
            tech
          )}
        </div>
      </div>
    </>
  );
};
