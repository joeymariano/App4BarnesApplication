import React, { Component } from 'react';
import CustomerForm from '../components/CustomerForm'
import HeroService from '../components/HeroService'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class AccordionContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  visible: true
	 	}

	 	this.initialState = this.state;    
	}

	visibleCntrl = () => {
		this.setState(prevState => ({
		  visible: !prevState.visible
		}))
	}

	outputFormOrHero = () => {
		if (this.props.title === 'Customer Information'){
			return <CustomerForm visibleCntrl={ this.visibleCntrl } visible={ this.state.visible }/>
		}
		if (this.props.title === 'Hero Service'){
			return <HeroService visibleCntrl={ this.visibleCntrl } visible={ this.state.visible }/>
		}
	}

	toggleButtonName = () => {
		if (this.state.visible){
			return 'collapse'
		} else {
			return 'edit'
		}
	}

	render(){
		return(
      <Card id="customer-form-container">
      	<CardBody>
					<div class="accordion-header" onClick={ () => { this.visibleCntrl() } }> 
						<h2 class="accordion-title">{ this.props.title }
						<Button outline className="float-right edit-form-button" size="sm">{ this.toggleButtonName() }</Button></h2>
					</div>

					<Collapse isOpen={ this.state.visible }>
						{ this.outputFormOrHero() }
					</Collapse>

				</CardBody>
	    </Card>
		)
	}
}

export default AccordionContainer