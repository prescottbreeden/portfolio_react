import React from 'react';
import { HexagonProps } from '../types';
import { either, identity } from '../utils';

export const Hexagon: React.FC<HexagonProps> = ({ label, name }) => {
  const className = `site__container--tool tool-img-${name}`;
  return (
    <>
      <div className={className}>
        <h4 className="site__container--tool-name">
          {either(identity, () => name)(label)}
        </h4>
      </div>
    </>
  );
};
