import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchContent from './components/SearchContent';
import Footer from './components/Footer';
import axios from 'axios';

// axios.post('https://localhost:3004/testNode', {key: "test", key2: "test 2"})
// .then((response) => {console.log(response);})
// .catch((error) => {
//   console.log('error:', error.message, error);
// })


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
