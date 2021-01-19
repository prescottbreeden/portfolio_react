import React from 'react';
import { HEXAGONS } from '../constants/hexagon.constants';
import { HexagonProps } from '../types';
import { compose, either, identity, objProp, toLower } from '../utils';

export const Hexagon: React.FC<HexagonProps> = ({ label, name }) => {
  const hex = compose(objProp(HEXAGONS), toLower);
  const className = 'site__container--tool ' + hex(name);
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
