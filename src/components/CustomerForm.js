// Name (cannot be empty) X
// Phone Number (at least 7 digits, only numbers)
// Email Address (cannot be empty and must be in format abc@xyz.someTld)
// Zip Code (at least 5 digits, only numbers)

import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class CustomerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  firstName: '',
		  lastName: '',
		  phone: '',
		  email: '',
		  zipcode: '',
		  formErrors: {},
		  visible: true
	 	}

	 	this.initialState = this.state;    
	}

	formValidator = () => {
		let { firstName, lastName, phone, email, zipcode } = this.state
		let formErrors = {}
		let formIsValid = true  
		// frist name     
		if (!firstName) {    
			formIsValid = false  
			formErrors['firstNameErr'] = 'First Name is required.'
		}   
		// last name     
		if (!lastName) {    
			formIsValid = false
			formErrors['lastNameErr'] = 'Last Name is required.'  
		} 
		// email    
		if (!email) {    
			formIsValid = false;    
			formErrors['emailErr'] = 'Email is required.'    
		} else { 
			let emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/  
			if (!emailRegex.test(email)) { 
				formIsValid = false
				formErrors['emailErr'] = 'Invalid email.'  
			}
		}    
		// phone number    
		if (!phone) {    
			formIsValid = false   
			formErrors['phoneErr'] = 'Phone number is required.' 
		} else {    
			let phoneRegex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
			if (!phoneRegex.test(phone)) {    
			   formIsValid = false
			   formErrors['phoneErr'] = 'Invalid phone number.'    
			}
		}
		// zipcode    
		if (!zipcode) {    
			formIsValid = false;    
			formErrors['zipcodeErr'] = 'Zipcode is required.' 
		} else {    
			let zipcodeRegex = /^[0-9]{5}$/  
			if (!zipcodeRegex.test(zipcode)) {    
			   formIsValid = false
			   formErrors['zipcodeErr'] = 'Invalid zipcode.'
			}  
		}    
		// update formError state
	  	this.setState({ ...this.state, formErrors: formErrors })
	  	// return boolean
		return formIsValid;  
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
			<Form onSubmit={ (event) => this.handleSubmit(event) }>
				<FormGroup>
					<Input id='first-name-input' placeholder="First Name"  name='firstName' type='text' value={ this.state.firstName } onChange={ this.updateState }/>
					<div id='first-name-err' className='errors'>{ this.state.formErrors['firstNameErr'] }</div>
				</FormGroup>

				<FormGroup>
					<Input id='last-name-input' placeholder="Last Name"  name='lastName' type='text' value={ this.state.lastName } onChange={ this.updateState }/>
					<div id='last-name-err' className='errors'>{ this.state.formErrors['lastNameErr'] }</div>
				</FormGroup>	

				<FormGroup>
					<Input id='phone-input' placeholder="5556667777" name='phone' type='text' value={ this.state.phone } onChange={ this.updateState }/>
					<div id='phone-err' className='errors'>{ this.state.formErrors['phoneErr'] }</div>
				</FormGroup>

				<FormGroup>
					<Input id='email-input' name='email' placeholder={'email@email.com'} type='email' value={ this.state.email } onChange={ this.updateState }/>
					<div id='email-err' className='errors'>{this.state.formErrors['emailErr']}</div>
				</FormGroup>

				<FormGroup>
					<Input id='zipcode-input' placeholder={"19555"} name='zipcode' type='text' value={ this.state.zipcode } onChange={ this.updateState }/>
					<div id='zipcode-err' className='errors'>{ this.state.formErrors['zipcodeErr'] }</div>
				</FormGroup>
				
				<Button color="danger">Continue</Button>
			</Form>
		)
	}
}

export default CustomerForm