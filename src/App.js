import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Nav';
import { Search, searchLatLong, searchLocation, searchFT, GETposition } from './API-interactions/api-calls';

Search("ux");
searchLatLong(37.3229978, -122.0321823);
searchLocation(37211);
searchLocation("Cupertino");
searchFT();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Test />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
