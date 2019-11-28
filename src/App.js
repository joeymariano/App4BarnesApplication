import React, { Component } from 'react';
import './App.css';
import CustomerFormContainer from './containers/CustomerFormContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomerFormContainer />
      </div>
    );
  }
}

export default App;
