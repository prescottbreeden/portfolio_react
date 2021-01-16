import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon.component';
import { ComputedNavName } from '../types';
import { compose, equals, maybe, prop, scrollToAnchor } from '../utils';

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
  const getComputedStyle = (element: any): CSSStyleDeclaration => {
    return window.getComputedStyle(element);
  };
  // -- display logic --
  const computedClassName = (bool: boolean): ComputedNavName => {
    return bool ? navClass : checkboxNav ? 'nav active-nav' : 'nav';
  };
  const navClassName = (): ComputedNavName => {
    return maybe(document.getElementById('nav'))
      .map(
        compose(
          computedClassName,
          equals('absolute'),
          prop('position'),
          getComputedStyle
        )
      )
      .join();
  };

  return (
    <>
      <div className="cb-nav">
        <div className="cb-nav__container">
          <input
            type="checkbox"
            className="cb-nav__checkbox"
            id="navi-toggle"
            checked={checkboxNav}
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
      <nav className={navClassName()} id="nav">
        <div className="nav__list">
          <Link to="/">
            <div
              className="nav__item nav__item--home about-nav"
              onClick={handleNav}
            >
              <span className="nav__link">About</span>
              <Icon className="nav__icon" name="profile" />
            </div>
          </Link>
          <Link to="/portfolio">
            <div className="nav__item portfolio-nav" onClick={handleNav}>
              <span className="nav__link">Portfolio</span>
              <Icon className="nav__icon nav__icon--portfolio" name="embed" />
            </div>
          </Link>
          <div className="nav__item tech-nav" onClick={handleNav}>
            <span className="nav__link">Technology</span>
            <Icon className="nav__icon nav__icon--about" name="database" />
          </div>
          <div className="nav__item contact-nav" onClick={handleNav}>
            <span className="nav__link">Contact</span>
            <Icon className="nav__icon nav__icon--contact" name="envelop" />
          </div>
        </div>
      </nav>
    </>
  );
};
