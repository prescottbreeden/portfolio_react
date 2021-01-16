import React from 'react';
import { Icon } from '../components/Icon.component';

interface ContactProps {}
export const Contact: React.FC<ContactProps> = (props) => {
  return (
    <>
      <section className="contact">
        <h2 className="contact__header">Get In Touch</h2>
        <h3 className="contact__info--header">Connect</h3>
        <ul className="contact__info">
          <li className="contact__info--item">
            <a
              title="Send Email"
              href="mailto:prescott@amplifycp.com"
              className="contact__info--link"
            >
              <Icon className="contact__icon" name="envelop" />
              Email
            </a>
          </li>
          <li className="contact__info--item">
            <a
              title="Open Link"
              href="http://www.linkedin.com/in/prescottbreeden"
              rel="noreferrer"
              target="_blank"
              className="contact__info--link"
            >
              <Icon className="contact__icon" name="linkedin" />
              LinkedIn
            </a>
          </li>
          <li className="contact__info--item">
            <a
              title="Open Link"
              href="https://github.com/prescottbreeden"
              rel="noreferrer"
              target="_blank"
              className="contact__info--link"
            >
              <Icon className="contact__icon" name="github" />
              Github
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
