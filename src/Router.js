import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Settings from "./pages/Settings";
import History from "./pages/History";

const Main = () => {
  return (
      <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Home}/>
        <Route exact path='/settings' component={Settings}/>
        <Route exact path='/history' component={History}/>
      </Switch>
  );
}

export default Main;
