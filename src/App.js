import React, { Component } from 'react';
import './App.css';
import AccordionContainer from './containers/AccordionContainer'
import Logo from './components/Logo'
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
	    <Container>
	  		<Row>
				<Col xs="4">
	      			<Logo />
	      		</Col>
			</Row>
	  		<Row>
				<Col sm="12" md="8">
	        			<AccordionContainer title={ 'Customer Information'}/>
	      		</Col>
			</Row>
	     </Container>
    );
  }
}

export default App;
