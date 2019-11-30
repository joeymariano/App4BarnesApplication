import React, { Component } from 'react';
import './App.css';
import AccordionContainer from './containers/AccordionContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AccordionContainer title={ 'Customer Information'}/>
      </div>
    );
  }
}

export default App;
