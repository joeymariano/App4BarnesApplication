import React, { Component } from 'react';
import CustomerForm from '../components/CustomerForm'

class CustomerFormContainer extends Component {

	render(){
		return(
			<div id="customer-form-container">
				<CustomerForm />
			</div>
		)
	}

}

export default CustomerFormContainer