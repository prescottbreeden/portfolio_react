import React from 'react';
import { HEXAGONS } from '../constants/hexagon.constants';
import { compose, either, identity, objProp, toLower } from '../utils';

interface HexagonProps {
  name: string;
  label?: string;
}
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
