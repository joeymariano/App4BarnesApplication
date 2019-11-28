// Name (cannot be empty) X
// Phone Number (at least 7 digits, only numbers)
// Email Address (cannot be empty and must be in format abc@xyz.someTld)
// Zip Code (at least 5 digits, only numbers)

import React, { Component } from 'react';

class CustomerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  firstName: '',
		  lastName: '',
		  phone: '',
		  email: '',
		  zipcode: '',
		  formErrors: {}
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
			let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/  
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
			let phoneRegex = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/
			if (!phoneRegex.test(phone)) {    
			   formIsValid = false
			   formErrors['phoneNumberErr'] = 'Invalid phone number.'    
			}
		}
		// zipcode    
		if (!zipcode) {    
			formIsValid = false;    
			formErrors['zipcodeErr'] = 'Phone number is required.' 
		} else {    
			let zipcodeRegex = /(^(?!0{5})(\d{5})(?!-?0{4})(-?\d{4})?$)/  
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
		event.preventDefault();
		if (this.formValidator()){
	    alert('Thank you for your information.')
	    this.setState(this.initialState)    
		}
	}

	render() {
		return (
			<form onSubmit={ event => this.handleSubmit(event) }>
				<div id="first-name-group" class="form-group">
					<label>First Name</label>
					<input id='first-name-input' name='first-name' type='text' value={ this.state.firstName } onChange={ this.updateState }/>
					<div id='first-name-err' className='errors'>{ this.state.formErrors['firstNameErr'] }</div>
				</div>

				<div id="last-name-group" class="form-group">
					<label>Last Name</label>
					<input id='last-name-input' name='last-name' type='text' value={ this.state.lastName } onChange={ this.updateState }/>
					<div id='last-name-err' className='errors'>{ this.state.formErrors['lastNameErr'] }</div>
				</div>				

				<div id="phone-group" class="form-group">
					<label>Phone</label>
					<input id='phone-input' name='phone' type='text' value={ this.state.phone } onChange={ this.updateState }/>
					<div id='phone-err' className='errors'>{ this.state.formErrors['phoneErr'] }</div>
				</div>

				<div id="email-group" class="form-group">
					<label>Email</label>
					<input id='email-input' name='email' type='text' value={ this.state.email } onChange={ this.updateState }/>
					<div id='email-err' className='errors'>{this.state.formErrors['emailErr']}</div>
				</div>

				<div id="zipcode-group" class="form-group">
					<label>Zipcode</label>
					<input id='zipcode-input' name='zipcode' type='text' value={ this.state.zipcode } onChange={ this.updateState }/>
					<div id='zipcode-err' className='errors'>{ this.state.formErrors['zipcodeErr'] }</div>
				</div>

				<button id='submit' class='continue-button' type='submit' value='Continue'>Continue</button>
			</form>
		)
	}
}

export default CustomerForm