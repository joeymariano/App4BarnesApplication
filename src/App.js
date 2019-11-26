import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerForm from './components/CustomerForm'
import ContinueButton from './components/ContinueButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomerForm />
        <ContinueButton />
      </div>
    );
  }
}

export default App;
