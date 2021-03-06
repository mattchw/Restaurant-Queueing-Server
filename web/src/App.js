import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// components
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

// route
import SignUp from './route/SignUp'
import Login from './route/Login'
import Home from './route/Home'
import Dashboard from './route/Dashboard'
import ShopSearch from './route/ShopSearch'
import Tickets from './route/Tickets'
import NotFound from './route/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/shops" component={ShopSearch} />
        <PrivateRoute exact path="/tickets" component={Tickets} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
