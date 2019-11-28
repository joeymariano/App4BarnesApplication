import React, { Component } from 'react';
import CustomerForm from '../components/CustomerForm'

class CustomerFormContainer extends Component {
	render(){
		return(
			<div id="customer-form-container">
				<div class="form-header">
					<span class="number-button-red">1</span>
					<h2>Customer Information</h2>
				</div>
				<CustomerForm />
			</div>
		)
	}
}

export default CustomerFormContainer