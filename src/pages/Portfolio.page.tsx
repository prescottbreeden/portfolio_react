import React from 'react';
import { Project } from '../components/Project.component';
import { PROJECTS } from '../constants/projects.constants';

interface PortfolioProps {}
export const Portfolio: React.FC<PortfolioProps> = () => {
  const createProject = (proj: any) => React.createElement(Project, proj);

  return (
    <>
      <section className="portfolio">
        <h2 className="portfolio__header">What I've Built</h2>
        {PROJECTS.map(createProject)}
      </section>
    </>
  );
};
