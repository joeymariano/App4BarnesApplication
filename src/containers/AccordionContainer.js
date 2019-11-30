import React, { Component } from 'react';
import CustomerForm from '../components/CustomerForm'
import HeroService from '../components/HeroService'
import { Collapse, Button, CardBody, Card, Row, Col } from 'reactstrap';

class AccordionContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  visible: true
	 	}

	 	this.initialState = this.state;    
	}

	visibleCntrl = () => {
		// use form.minimize and form.maximize depending on min max count?
		this.setState(prevState => ({
		  visible: !prevState.visible
		}));
	}

	outputFormOrHero = () => {
		if (this.props.title === 'Customer Information'){
			return <CustomerForm visibleCntrl={ this.visibleCntrl } visible={ this.state.visible }/>
		}
		if (this.props.title === 'Hero Service'){
			return <HeroService visibleCntrl={ this.visibleCntrl } visible={ this.state.visible }/>
		}
	}

	render(){
		return(
			<div id="customer-form-container">
        <Card>
        	<CardBody>
						<div class="accordion-header" onClick={ () => { this.visibleCntrl() } }>
							<h2 class="accordion-title">{ this.props.title } <Button outline className="float-right edit-form-button" size="sm">edit</Button></h2>
						</div>

						<Collapse isOpen={ this.state.visible }>
							{ this.outputFormOrHero() }
						</Collapse>

					</CardBody>
		    </Card>
			</div>
		)
	}
}

export default AccordionContainer