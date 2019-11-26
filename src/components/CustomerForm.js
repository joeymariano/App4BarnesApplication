// customer form

// Name (cannot be empty)
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
      zipCode: ''
    };
  }

  updateState = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <label>First Name</label>
        <input id="firstName" name="firstName" type="text" value={ this.state.firstName } onChange={ this.updateState }/>
        <label>Last Name</label>
        <input id="lastName" name="lastName" type="text" value={ this.state.lastName } onChange={ this.updateState }/>
        <label>Phone</label>
        <input id="phone" name="phone" type="text" value={ this.state.phone } onChange={ this.updateState }/>
		<label>Email</label>
        <input id="email" name="email" type="text" value={ this.state.email } onChange={ this.updateState }/>
        <label>ZipCode</label>
        <input id="zipCode" name="zipCode" type="text" value={ this.state.zipCode } onChange={ this.updateState }/>
      </form>
    )
  }
}

export default CustomerForm;