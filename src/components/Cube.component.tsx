import React from 'react';
import { BLUE_BRIGHT, PINK_BRIGHT } from '../constants';

const style1 = {
  backgroundColor: PINK_BRIGHT,
};
const style2 = {
  backgroundColor: BLUE_BRIGHT,
};

interface CubeProps {}
export const Cube: React.FC<CubeProps> = () => {
  return (
    <>
      <div className="contenitore-preloader">
        <div className="cubo">
          <div style={style1} className="faccia faccia1">
            <span>
              <strong>res</strong>pect
            </span>
          </div>
          <div style={style1} className="faccia faccia2">
            <span>
              <strong>gro</strong>wth
            </span>
          </div>
          <div style={style2} className="faccia faccia3">
            <span>
              <strong>div</strong>ersity
            </span>
          </div>
          <div style={style2} className="faccia faccia4">
            <span>
              <strong>inn</strong>ovation
            </span>
          </div>
          <div style={style1} className="faccia faccia5">
            <span>
              <strong>int</strong>egrity
            </span>
          </div>
          <div style={style2} className="faccia faccia6">
            <span>
              <strong>con</strong>nection
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
