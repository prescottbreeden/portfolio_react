import React, {useEffect, useState} from 'react';
import { Waypoint } from 'react-waypoint';
import {
  compose,
  either,
  gt,
  headerHeight,
  maybe,
  prop,
  subtract,
} from '../utils';
import {Navigation} from './navigation.layout';


interface HeaderProps {}
export const Header: React.FC<HeaderProps> = () => {
  // -- local state --
  const [navClass, setNavClass] = useState("nav");

  // -- lifecycle --
  useEffect(() => {
    maybe(document.getElementById('nav')).map(compose(
      either(() => setNavClass("nav sticky"), () => setNavClass("nav")),
      gt(0),
      subtract(window.pageYOffset),
      prop('offsetTop')
    ));
  });

  // -- display logic --
  return (
    <>
      <Waypoint
        onEnter={() => setNavClass("nav")}
        onLeave={() => setNavClass("nav sticky")}
        topOffset={headerHeight}
      >
        <header className="header">
          <div className="header__title">
            <h1 className="header__primary-text">
              Prescott Breeden<span className="header__blink">_</span>
            </h1>
            <p className="header__secondary-text">Software Engineer</p>
          </div>
        </header>
      </Waypoint>
      <Navigation navClass={navClass} />
    </>
  );
};

