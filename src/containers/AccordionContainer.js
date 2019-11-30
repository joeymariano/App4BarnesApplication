import React, { Component } from 'react';
import CustomerForm from '../components/CustomerForm'
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

	render(){
		return(
			<div id="customer-form-container">
        <Card>
        	<CardBody>

						<div class="form-header" onClick={ () => { this.visibleCntrl() } }>
							<h2 class="form-header-title">{ this.props.title } <Button outline size="sm" class="float-right">edit</Button></h2>
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