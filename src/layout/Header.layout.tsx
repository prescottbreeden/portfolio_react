import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { ComputedNavName } from '../types';
import { headerHeight } from '../utils';
import { Navigation } from './Navigation.layout';

interface HeaderProps {}
export const Header: React.FC<HeaderProps> = () => {
  // -- local state --
  const [navClass, setNavClass] = useState<ComputedNavName>('nav');
  // -- display logic --
  return (
    <>
      <Waypoint
        onEnter={() => setNavClass('nav')}
        onLeave={() => setNavClass('nav sticky')}
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
