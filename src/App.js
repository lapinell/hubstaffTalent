import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchContent from './components/SearchContent';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="container-App">
         <NavBar />
         <SearchContent />
         <Footer />
        </div>
      </div>
    );
  }
}

export default App;
