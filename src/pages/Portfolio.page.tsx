import React from 'react';
import { Project } from '../components/Project.component';
import { PROJECTS } from '../constants/projects.constants';
import { ProjectData } from '../types';
import { map } from '../utils';

interface PortfolioProps {}
export const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <>
      <section className="portfolio">
        <h2 className="portfolio__header">What I've Built</h2>
        <p className="u-center">
          A mixture of personal projects and consulting work.
        </p>
        {map(
          (proj: ProjectData) => (
            <Project {...proj} />
          ),
          PROJECTS
        )}
      </section>
    </>
  );
};
