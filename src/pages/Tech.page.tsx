import React from 'react';
import { HoneyComb } from '../components/HoneyComb.component';
import { Tools } from '../components/Skills.component';

interface TechProps {}
export const Tech: React.FC<TechProps> = (props) => {
  return (
    <>
      <HoneyComb />
      <Tools />
    </>
  );
};
