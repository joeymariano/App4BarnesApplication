import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerForm from './components/CustomerForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomerForm />
      </div>
    );
  }
}

export default App;
