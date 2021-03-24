import React, { useState } from 'react';
import blueCube from '../assets/img/cube_primary.png';
import { TECH_FAVE } from '../constants';
import { images } from '../constants/hexagon.constants';
import { TECH_DESCRIPTIONS } from '../constants/tech.constants';
import {
  compose,
  curry,
  doNothing,
  either,
  equals,
  identity,
  prop,
} from '../utils';

interface HoneyCombProps {}
export const HoneyComb: React.FC<HoneyCombProps> = () => {
  const [selected, setSelected] = useState<string>('blueCube');
  const handleKeyPress = curry((tech: string, event: any) =>
    compose(
      either(() => setSelected(tech), doNothing),
      equals('Enter'),
      prop('key')
    )(event)
  );
  const image = compose(either(identity, blueCube), prop(selected));
  const description = compose(prop('description'), prop(selected));

  return (
    <>
      <section className="tech">
        <h2 className="tech__header">These are a few of my favorite things</h2>
        <ul className="grid clear">
          {TECH_FAVE.map((tech: string, index: number) => {
            return (
              <li key={tech} className="hex-container">
                <p
                  className={`hexagon img-${tech} tech__animate-${index}`}
                  onClick={() => setSelected(tech)}
                  onKeyPress={handleKeyPress(tech)}
                  tabIndex={0}
                >
                  <span className="transparent">${tech}</span>
                </p>
              </li>
            );
          })}
        </ul>
        <div className="tech__details">
          <div className="tech__details--container">
            <div className="tech__logo-box">
              <div className="tech__logo-pad">
                <div className="tech__logo" id="tech_image">
                  <img
                    alt="tech cube"
                    height="auto"
                    src={image(images)}
                    width="auto"
                  />
                </div>
              </div>
            </div>
            <div className="tech__explain" id="blurb">
              {equals('blueCube', selected) ? (
                <p>
                  Click on a logo above to learn more about some of my favorite
                  tech!
                </p>
              ) : (
                <p>{description(TECH_DESCRIPTIONS)}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
