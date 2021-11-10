import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../Routes/Home';
import Intro from '../../Routes/Intro';

interface IProps {
  isInput: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isInput }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>{isInput ? <HomeRouters /> : <IntroRouters />}</BrowserRouter>
  );
};

const HomeRouters = () => {
  return (
    <Switch>
      <Route path={'/'} exact component={Home} />
      <Redirect from={'*'} to={'/'} />
    </Switch>
  );
};
const IntroRouters = () => {
  return (
    <Switch>
      <Route path={'/'} exact component={Intro} />
      <Redirect from={'*'} to={'/'} />
    </Switch>
  );
};

export default AppPresenter;
