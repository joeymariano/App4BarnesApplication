import React, { Component } from 'react';
import CustomerForm from '../components/CustomerForm'

class CustomerFormContainer extends Component {

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
				<div class="form-header">
					<span class="number-button-red">1</span>
					<h2>Customer Information</h2>
				</div>
				<CustomerForm visibleCntrl={ this.visibleCntrl } visible={ this.state.visible }/>
			</div>
		)
	}
}

export default CustomerFormContainer