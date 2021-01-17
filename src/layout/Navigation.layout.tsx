import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../components/Icon.component';
import { PRIMARY_COLOR } from '../constants';
import { ComputedNavName } from '../types';
import {
  compose,
  doNothing,
  either,
  equals,
  includes,
  maybe,
  prop,
  scrollToAnchor,
} from '../utils';

interface NavigationProps {
  navClass: ComputedNavName;
}
export const Navigation: React.FC<NavigationProps> = ({ navClass }) => {
  // -- local state --
  const [checkboxNav, setCheckboxNav] = useState(false);

  // -- component logic --
  const handleToggle = (): void => {
    setCheckboxNav(!checkboxNav);
  };
  const handleNav = (): void => {
    scrollToAnchor('fold');
    setCheckboxNav(false);
  };
  const handleKeyPress = compose(
    either(handleNav, doNothing),
    equals('Enter'),
    prop('key')
  );

  // -- display logic --
  const computedClassName = (bool: boolean): ComputedNavName => {
    return bool ? navClass : checkboxNav ? 'nav active-nav' : 'nav';
  };
  const _getComputedStyle = (element: any): CSSStyleDeclaration => {
    return window.getComputedStyle(element);
  };
  const _navClassName = (): ComputedNavName => {
    const nav = maybe(document.getElementById('nav')).map(
      compose(
        computedClassName,
        equals('absolute'),
        prop('position'),
        _getComputedStyle
      )
    );
    return nav.isNothing ? 'nav' : nav.join();
  };
  const activeLinkStyle = {
    backgroundColor: includes('sticky', navClass) ? PRIMARY_COLOR : '',
    borderRadius: '3px',
  };

  return (
    <>
      <div className="cb-nav">
        <div className="cb-nav__container">
          <input
            checked={checkboxNav}
            className="cb-nav__checkbox"
            id="navi-toggle"
            onChange={() => null}
            type="checkbox"
          />
          <label
            htmlFor="navi-toggle"
            className="cb-nav__button"
            onClick={handleToggle}
          >
            <span className="cb-nav__icon">&nbsp;</span>
          </label>
        </div>
      </div>
      <nav className={_navClassName()} id="nav">
        <div className="nav__list">
          <NavLink
            activeStyle={activeLinkStyle}
            id="about"
            onClick={handleNav}
            onKeyDown={handleKeyPress}
            to="/about"
          >
            <div className="nav__item">
              <span className="nav__link">About</span>
              <Icon className="nav__icon" name="profile" />
            </div>
          </NavLink>
          <NavLink
            activeStyle={activeLinkStyle}
            id="portfolio"
            to="/portfolio"
            onClick={handleNav}
            onKeyDown={handleKeyPress}
          >
            <div className="nav__item">
              <span className="nav__link">Portfolio</span>
              <Icon className="nav__icon nav__icon--portfolio" name="embed" />
            </div>
          </NavLink>
          <NavLink
            activeStyle={activeLinkStyle}
            id="tech"
            onClick={handleNav}
            onKeyDown={handleKeyPress}
            to="/tech"
          >
            <div className="nav__item">
              <span className="nav__link">Technology</span>
              <Icon className="nav__icon nav__icon--about" name="database" />
            </div>
          </NavLink>
          <NavLink
            activeStyle={activeLinkStyle}
            id="contact"
            onClick={handleNav}
            onKeyDown={handleKeyPress}
            to="/contact"
          >
            <div className="nav__item">
              <span className="nav__link">Contact</span>
              <Icon className="nav__icon nav__icon--contact" name="envelop" />
            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};
