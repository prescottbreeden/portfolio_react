import React from 'react';
/* import slotify from './../assets/img/slotify.png'; */
/* import powder from './../assets/img/powder_desktop.png'; */
/* import casino31 from './../assets/img/casino31.png'; */
/* import ultimateFan from './../assets/img/ultimate_fan.png'; */
/* import { Icon } from '../components/Icon.component'; */
import { Project } from '../components/Project.component';

interface PortfolioProps {}
export const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <>
      <section className="portfolio">
        <h2 className="portfolio__header">What I've Built</h2>
        <Project />
      </section>
    </>
  );
};
