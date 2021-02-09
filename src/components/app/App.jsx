import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../header/Header';
import ShowById from '../../containers/ShowById';
import ShowsPage from '../../containers/ShowsPage';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ShowsPage} />
          <Route path="/shows/:id" component={ShowById} />
        </Switch>
      </Router>
    </div>
  );
}
