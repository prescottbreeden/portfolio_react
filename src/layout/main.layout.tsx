import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Tech } from '../components/Tech.component';
import { Contact } from '../pages/Contact.page';
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
          <Route exact path="/tech" component={Tech} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </>
  );
};
