import React, { useEffect, useState } from 'react';
import {
  PRIMARY_LIGHT_COLOR,
  SECONDARY_LIGHT_COLOR,
} from '../constants/css.constants';
import { QUOTES } from '../constants/quotes.constants';
import { compose, converge, head, prop, splitAt, tail } from '../utils';

interface CubeProps {}
export const Cube: React.FC<CubeProps> = () => {
  // -- local state --
  const [values, setValues] = useState([
    'respect',
    'growth',
    'diversity',
    'innovation',
    'integrity',
    'connection',
  ]);

  // -- component logic --
  const shiftValues = (vals: string[]) => {
    return converge((a: string[], b: string) => [...a, b], [
      compose(tail, splitAt(1)),
      head,
    ])(vals);
  };

  // -- lifecycle --
  useEffect(() => {
    const rotateVals = window.setInterval(() => {
      setValues(shiftValues);
    }, 10000);

    return () => {
      window.clearInterval(rotateVals);
    };
  }, []);

  // -- display logic --
  const getStart = (index: number) =>
    compose(head, splitAt(3), prop(index))(values);

  const getLast = (index: number) =>
    compose(tail, splitAt(3), prop(index))(values);

  const style1 = {
    backgroundColor: PRIMARY_LIGHT_COLOR,
  };
  const style2 = {
    backgroundColor: SECONDARY_LIGHT_COLOR,
  };

  return (
    <>
      <section className="quotes">
        <h2 className="quotes__heading">What I Believe In</h2>
        <div className="quotes__cube">
          <div className="contenitore-preloader">
            <div className="cubo">
              <div style={style2} className="faccia faccia1">
                <span>
                  <strong>{getStart(0)}</strong>
                  {getLast(0)}
                </span>
              </div>
              <div style={style1} className="faccia faccia2">
                <span>
                  <strong>{getStart(1)}</strong>
                  {getLast(1)}
                </span>
              </div>
              <div style={style1} className="faccia faccia3">
                <span>
                  <strong>{getStart(2)}</strong>
                  {getLast(2)}
                </span>
              </div>
              <div style={style1} className="faccia faccia4">
                <span>
                  <strong>{getStart(3)}</strong>
                  {getLast(3)}
                </span>
              </div>
              <div style={style1} className="faccia faccia5">
                <span>
                  <strong>{getStart(4)}</strong>
                  {getLast(4)}
                </span>
              </div>
              <div style={style1} className="faccia faccia6">
                <span>
                  <strong>{getStart(5)}</strong>
                  {getLast(5)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="quotes__container">
          <p className="quotes__quote">
            {compose(prop('quote'), prop(0), prop(values[0]))(QUOTES)}
          </p>
          <p className="quotes__author">
            {compose(prop('author'), prop(0), prop(values[0]))(QUOTES)}
          </p>
        </div>
      </section>
    </>
  );
};
