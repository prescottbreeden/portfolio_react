import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import { Main } from './layout/main.layout';

function App() {
  return (
    <>
      <HashRouter>
        <Main />
      </HashRouter>
    </>
  );
}

export default App;
