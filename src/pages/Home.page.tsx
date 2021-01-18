import React from 'react';
import { About } from '../components/About.component';
/* import {Cube} from '../components/Cube.component'; */
import { Services } from '../components/Services.component';

interface HomeProps {}
export const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <About />
      <Services />
      {/* <Cube /> */}
    </>
  );
};
