import React from 'react';

const PINK_BRIGHT = '#f03076';
/* const PINK_DARK = '#c8326f'; */
const BLUE_BRIGHT = '#34b5e0';

/* const colors = [ */
/*  '#55cef2', */
/*  '#b62e65', */
/*  '#2ea1c7', */
/* ] */

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
