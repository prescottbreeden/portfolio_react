import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import {Footer} from './layout/footer.layout';
import {Header} from './layout/header.layout';
import {Main} from './layout/main.layout';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
