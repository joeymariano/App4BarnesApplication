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
	}

	updateState = (event) => {
	 this.setState({
	   [event.target.name]: event.target.value
	 })
	}


	formValidator = (props) => {
		const { firstName, lastName, phone, email, zipcode } = this.state
		let formErrors = {}
		let formIsValid = true  

		debugger
		//frist name     
		if (!firstName) {    
		   formIsValid = false  
		   formErrors['firstNameErr'] = 'First Name is required.'
		}    

		//last name     
		if (!lastName) {    
		   formIsValid = false
		   formErrors['lastNameErr'] = 'Last Name is required.'  
		}    

	 //email    
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

	 //phone number    
	 if (!phone) {    
	     formIsValid = false   
	     formErrors['phoneErr'] = 'Phone number is required.' 
	 } else {    
	     var phoneRegex = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/
	     if (!phoneRegex.test(phone)) {    
	         formIsValid = false
	         formErrors['phoneNumberErr'] = 'Invalid phone number.'    
	     }
	 }

	 //zipcode    
	 if (!zipcode) {    
	     formIsValid = false;    
	     formErrors['zipcodeErr'] = 'Phone number is required.' 
	 } else {    
	     var zipcodeRegex = /(^(?!0{5})(\d{5})(?!-?0{4})(-?\d{4})?$)/  
	     if (!zipcodeRegex.test(zipcode)) {    
	         formIsValid = false
	         formErrors['zipcodeErr'] = 'Invalid zipcode.'  
	     }    
	 }

		this.setState({ formErrors: formErrors })  

		return formIsValid 

	}


	render() {
		return (
			<form onSubmit={ this.formValidator }>
				<label>First Name</label>
				<input id='firstName' name='firstName' type='text' value={ this.state.firstName } onChange={ this.updateState }/>
				<label id='firstNameErrors' className='errors'>{ this.state.formErrors['firstName'] }</label>

				<label>Last Name</label>
				<input id='lastName' name='lastName' type='text' value={ this.state.lastName } onChange={ this.updateState }/>
				<label id='firstNameErrors' className='errors'>{ this.state.formErrors['lastName'] }</label>

				<label>Phone</label>
				<input id='phone' name='phone' type='text' value={ this.state.phone } onChange={ this.updateState }/>
				<label id='firstNameErrors' className='errors'>{ this.state.formErrors['phone'] }</label>

				<label>Email</label>
				<input id='email' name='email' type='text' value={ this.state.email } onChange={ this.updateState }/>
				<label id='firstNameErrors' className='errors'>{this.state.formErrors['email']}</label>

				<label>Zipcode</label>
				<input id='zipcode' name='zipcode' type='text' value={ this.state.zipcode } onChange={ this.updateState }/>
				<label id='firstNameErrors' className='errors'>{this.state.formErrors['zipcode']}</label>

				<input id='submit' type='submit' value='Continue' />
			</form>
		)
	}
}

export default CustomerForm