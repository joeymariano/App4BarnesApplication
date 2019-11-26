// customer form

// Name (cannot be empty)
// Phone Number (at least 7 digits, only numbers)
// Email Address (cannot be empty and must be in format abc@xyz.someTld)
// Zip Code (at least 5 digits, only numbers)

import React, { Component } from 'react';

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.myPassword = React.createRef()
    this.state = {
      name: '',
      phone: '',
      email: '',
      zipCode: ''
    }
  }

  render() {
    return (
    	<div></div>
    )
  }
}

export default CustomerForm;