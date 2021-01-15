import React, {useEffect, useState} from 'react';
import { Waypoint } from 'react-waypoint';
import { Link } from 'react-router-dom';
import {
  compose,
  either,
  gt,
  headerHeight,
  maybe,
  prop,
  scrollToAnchor,
  subtract,
} from '../utils';


interface HeaderProps {}
export const Header: React.FC<HeaderProps> = () => {
  // -- local state --
  const [navClass, setNavClass] = useState("nav");

  // -- component logic --
  // setSticky :: ele -> undefined
  const setSticky = compose(
    either(() => setNavClass("nav sticky"), () => setNavClass("nav")),
    gt(0),
    subtract(window.pageYOffset),
    prop('offsetTop')
  );

  // -- lifecycle --
  useEffect(() => {
    maybe(document.getElementById('nav')).map(setSticky);
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
          <div className="cb-nav">
            <div className="cb-nav__container">
              <input type="checkbox" className="cb-nav__checkbox" id="navi-toggle" />
              <label htmlFor="navi-toggle" className="cb-nav__button">
                <span className="cb-nav__icon">&nbsp;</span>
              </label>
            </div>
          </div>
        </header>
      </Waypoint>
      <nav className={navClass} id="nav">
        <div className="nav__list">
          <Link to="/">
            <div 
              className="nav__item nav__item--home about-nav"
              onClick={() => scrollToAnchor('fold')}
            >
              <svg className="nav__icon">
                <use 
                  xlinkHref="./../assets/img/icomoon/sprite.svg#icon-profile">
                </use>
              </svg>
                <span className="nav__link">About</span>
            </div>
          </Link>
          <Link to="/portfolio">
            <div
              className="nav__item portfolio-nav"
              onClick={() => scrollToAnchor('fold')}
            >
              <svg className="nav__icon nav__icon--portfolio">
                <use 
                  xlinkHref="./../assets/img/icomoon/sprite.svg#icon-embed2">
                </use>
              </svg>
              <span className="nav__link">
                  Portfolio
              </span>
            </div>
          </Link>
          <div 
            className="nav__item tech-nav"
            onClick={() => scrollToAnchor('fold')}
          >
            <svg className="nav__icon navigation__icon--about">
              <use 
                href="./../assets/img/icomoon/sprite.svg#icon-database">
              </use>
            </svg>
            <span className="nav__link">Technology</span>
          </div>
          <div 
            className="nav__item contact-nav"
            onClick={() => scrollToAnchor('fold')}
          >
            <svg className="nav__icon navigation__icon--contact">
              <use href="/assets/img/icomoon/sprite.svg#icon-envelop"/>
            </svg>
            <span className="nav__link">Contact</span>
          </div>
        </div>
      </nav>
    </>
  );
};

