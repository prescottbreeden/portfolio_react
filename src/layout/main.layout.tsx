import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home.page';
import { Portfolio } from '../pages/portfolio.page';

interface MainProps {}
export const Main: React.FC<MainProps> = () => {
  return (
    <>
      <div id="fold">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </>
  );
};
