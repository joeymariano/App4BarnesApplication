// Name (cannot be empty) X
// Phone Number (at least 7 digits, only numbers)
// Email Address (cannot be empty and must be in format abc@xyz.someTld)
// Zip Code (at least 5 digits, only numbers)

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class HeroService extends Component {
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
	}

	formVisibleCntrl = () => {
		if (this.props.visible === true){ 
			return 'visible'
		} else { 
			return 'invisible' 
		}
	}

	thisPropsHeros = () => {
		debugger
		return this.props.heros
	}

	render() {
		return (
			<div>
				<Button onClick={ () => { this.props.actions.getHeroService() }}>Get Heros</Button>
				<p>{ JSON.stringify(this.props.heros) }</p>
				<p>{ JSON.stringify(this.props.info) }</p>
			</div>
		)
	}
}

function mapStateToProps(rootReducer) {
  return {
    heros: rootReducer.herosReducer.heros,
    info: rootReducer.herosReducer.info
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(HeroService)