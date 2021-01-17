import React from 'react';
import { About } from '../components/About.component';
import { Services } from '../components/Services.component';

interface HomeProps {}
export const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <About />
      <Services />
    </>
  );
};
