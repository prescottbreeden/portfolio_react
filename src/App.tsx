import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Main } from './layout/Main.layout';

function App() {
  // on page refresh, force browser to render at top
  window.onbeforeunload = () => window.scrollTo({ top: 0 });
  return (
    <>
      <HashRouter>
        <Main />
      </HashRouter>
    </>
  );
}

export default App;
