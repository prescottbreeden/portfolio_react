import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  compose,
  curry,
  doNothing,
  either,
  equals,
  focus,
  maybe,
  prop,
  scrollToAnchor,
} from '../utils';
import logo from './../assets/img/p_logo5.png';

interface FooterProps {}
export const Footer: React.FC<FooterProps> = () => {
  // -- component logic --
  const handleNav = curry((id: string, _: any): void => {
    scrollToAnchor('fold');
    setTimeout(() => maybe(document.getElementById(id)).map(focus), 0);
  });
  const handleKeyPress = curry((id: string, event: KeyboardEvent) =>
    compose(
      either(handleNav(id), doNothing),
      equals('Enter'),
      prop('key')
    )(event)
  );
  // -- display logic --
  const date = new Date(Date.now()).getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="footer__logo">
          <img src={logo} alt="site logo" className="footer__logo-img" />
          <p className="footer__logo--name">Prescott Breeden, BM</p>
          <div className="footer__logo--brand">
            <p className="footer__logo--brand-text">Software Engineer</p>
          </div>
        </div>
        <div className="footer__container">
          <div className="footer__nav">
            <ul className="footer__nav--list">
              <li className="footer__nav--item">
                <NavLink
                  onClick={handleNav('about')}
                  onKeyDown={handleKeyPress('about')}
                  to="/about"
                >
                  <p className="nav__link">About</p>
                </NavLink>
              </li>
              <li className="footer__nav--item">
                <NavLink
                  onClick={handleNav('portfolio')}
                  onKeyDown={handleKeyPress('portfolio')}
                  to="/portfolio"
                >
                  <p className="nav__link">Portfolio</p>
                </NavLink>
              </li>
              <li className="footer__nav--item">
                <NavLink
                  onClick={handleNav('tech')}
                  onKeyDown={handleKeyPress('tech')}
                  to="/tech"
                >
                  <p className="nav__link">Tech</p>
                </NavLink>
              </li>
              <li className="footer__nav--item">
                <NavLink
                  onClick={handleNav('contact')}
                  onKeyDown={handleKeyPress('contact')}
                  to="/contact"
                >
                  <p className="nav__link">Contact</p>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__text contact-nav">
            <p>Copyright &copy; 2013-{date} by Prescott Breeden.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
