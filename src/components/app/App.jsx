import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ShowById from '../../containers/ShowById';
import ShowsPage from '../../containers/ShowsPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ShowsPage} />
        <Route path="/shows/:id" component={ShowById} />
      </Switch>
    </Router>
  );
}
