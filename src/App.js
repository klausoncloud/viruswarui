import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './stylesheets/css/default.min.css';



// Components

import Header from './components/header';
import GamePage from './components/gamepage/gamepage';
import UserInstructions from './components/usagepage/userinstructions';

import DeveloperPageCon from './containers/developerpagecon'


class App extends Component {
  render() {
    return (
      <Router basename="/simpleviruswar">
        <div className="container-fluid ">
          <Header />
          <Route exact path='/' component={GamePage} />
          <Route exact path='/Users' component={UserInstructions} />
          <Route exact path='/Developers' component={DeveloperPageCon} />
        </div>
      </Router>
    );
  }
}

export default App;
