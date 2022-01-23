import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';
import Navigation from './components/navigation';

class App extends Component { 
  state = {

  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          {/* <Redirect to="/home" /> */}
        </Switch>
      </div>
    )
  }
}

export default App;