import React from 'react';
import logo from './../assets/img/p_logo5.png';

interface FooterProps {}
export const Footer: React.FC<FooterProps> = () => {
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
              <li className="footer__nav--item about-nav">
                <p className="nav__link">About</p>
              </li>
              <li className="footer__nav--item portfolio-nav">
                <p className="nav__link">Portfolio</p>
              </li>
              <li className="footer__nav--item tech-nav">
                <p className="nav__link">Tech</p>
              </li>
              <li className="footer__nav--item contact-nav">
                <p className="nav__link">Contact</p>
              </li>
            </ul>
          </div>
          <div className="footer__text contact-nav">
            <p>Copyright &copy; {date} by Prescott Breeden.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
