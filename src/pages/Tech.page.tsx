import React from 'react';
import { HoneyComb } from '../components/HoneyComb.component';
import { Tools } from '../components/Skills.component';

interface TechProps {}
export const Tech: React.FC<TechProps> = (props) => {
  return (
    <>
      <HoneyComb />
      <div className="tools__knowledge-portfolio">
        <p>
          I take a page from David Thomas and Andrew Hunt when it comes to
          investing in myself and my knowledge:
        </p>
        <p className="tools__knowledge-portfolio--rule">
          Learn a programming language every year.
        </p>
        <p className="tools__knowledge-portfolio--rule">
          Read a book every month about programming.
        </p>
      </div>
      <div className="tools__knowledge-portfolio">
        <p>
          Programming is a craft like writing, painting or making music. Skill
          and growth are a result of dedicated practice, not paid opportunity.
        </p>
      </div>
      <div className="tools__knowledge-portfolio">
        <p>
          Here is a smattering of some of the tools and tech that I have either
          taught, used at work, or explored in my personal time.
        </p>
      </div>
      <Tools />
    </>
  );
};
