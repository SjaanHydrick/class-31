import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../header/Header';
import ShowById from '../../containers/ShowById';
import ShowsPage from '../../containers/ShowsPage';
import { ThemeProvider } from '../../state/showContext';

export default function App() {
  const [Provider] = useState(() => ThemeProvider);  

  return (
    <div>
      <Router>
        <Provider>
          <Header />
          <Switch>
            <Route exact path="/" component={ShowsPage} />
            <Route path="/shows/:id" component={ShowById} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}
