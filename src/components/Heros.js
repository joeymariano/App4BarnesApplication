// Name (cannot be empty) X
// Phone Number (at least 7 digits, only numbers)
// Email Address (cannot be empty and must be in format abc@xyz.someTld)
// Zip Code (at least 5 digits, only numbers)

import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Row, Col, Card, CardBody } from 'reactstrap';

class CustomerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  visible: true
	 	}

	 	this.initialState = this.state;    
	}

	updateState = (event) => {
	 this.setState({
	   [event.target.name]: event.target.value
	 })
	}

	handleSubmit = (event) => {
		event.preventDefault()
		if (this.formValidator()){
	    this.props.visibleCntrl() // toggle state to be not visible
		}
	}

	formVisibleCntrl = () => {
		if (this.props.visible === true){ 
			return 'visible'
		} else { 
			return 'invisible' 
		}
	}

	render() {
		return (
			<div>Heros</div>
		)
	}
}

export default CustomerForm