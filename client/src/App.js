import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AppNavbar from './common/AppNavBar';
import Home from './common/Home';
import Watchlist from './common/Watchlist';

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/watchlist' component={Watchlist} />
        <Route
          render={() => (
            <h2 style={{ textAlign: 'center', marginTop: '3rem' }}>
              404 Page Not Found
            </h2>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
