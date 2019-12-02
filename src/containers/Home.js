import React, { Component } from 'react';
import AccordionContainer from '../containers/AccordionContainer'
import { Row, Col } from 'reactstrap';
import Logo from '../components/Logo'


class Home extends Component {
	render(){
		return(
			<Row>
				<Col md="12" lg="8">
					<AccordionContainer title={ 'Customer Information'}/>
					<AccordionContainer title={ 'Hero Service'}/>
				</Col>
			</Row>
		)
	}
}

export default Home