import React, { Component } from 'react';
import CustomerForm from '../components/CustomerForm'
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
		// use form.minimize and form.maximize depending on min max count?
		this.setState(prevState => ({
		  visible: !prevState.visible
		}));
	}

	render(){
		return(
			<div id="customer-form-container">
        <Card>
        	<CardBody>
						<div class="form-header" onClick={ () => { this.visibleCntrl() } }>
							<span class="number-button-red">1</span><h2>{ this.props.title }</h2>
						</div>
						<Collapse isOpen={ this.state.visible }>
							<CustomerForm visibleCntrl={ this.visibleCntrl } visible={ this.state.visible }/>
						</Collapse>
					</CardBody>
		    </Card>
			</div>
		)
	}
}

export default AccordionContainer