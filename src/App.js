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
				<Col md="12" lg="8">
	        		<AccordionContainer title={ 'Customer Information'}/>
	        		<AccordionContainer title={ 'Hero Service'}/>
	      		</Col>
			</Row>
	     </Container>
    )
  }
}

export default App;
