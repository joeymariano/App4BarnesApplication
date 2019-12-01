// Name (cannot be empty) X
// Phone Number (at least 7 digits, only numbers)
// Email Address (cannot be empty and must be in format abc@xyz.someTld)
// Zip Code (at least 5 digits, only numbers)

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'
import HeroCard from './HeroCard'
import TeamInfoCard from './TeamInfoCard'

class HeroService extends Component {
	constructor(props) {
		super(props);
		this.state = {

	 	}  
	}

// [
// 	{"name":"Molecule Man","age":29,"secretIdentity":"Dan Jukes",
// 		"powers":["Radiation resistance","Turning tiny","Radiation blast"]},
// 	{"name":"Madame Uppercut","age":39,"secretIdentity":"Jane Wilson",
// 		"powers":["Million tonne punch","Damage resistance","Superhuman reflexes"]},
// 	{"name":"Eternal Flame","age":1000000,"secretIdentity":"Unknown",
// 		"powers":["Immortality","Heat Immunity","Inferno","Teleportation","Interdimensional travel"]}
// ]
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

	renderTeamInfoCards = () => {
		let result = this.props.info.map((obj, idx) => {
			let keyValue = Object.keys(obj).toString()

			if (keyValue === 'squadName'){
				return(
					<h1 class='heroGroup'>Squad Name: { obj[keyValue] }</h1>
				)
			}
			if (keyValue === 'homeTown'){
				return(
					<h2>Hometown: { obj[keyValue] }</h2>
				)
			}
			if (keyValue === 'formed'){
				return(
					<p>Formed: { obj[keyValue] } </p>
				)
			}
			if (keyValue === 'secretBase'){
				return(
					<p>Secrect Base: { obj[keyValue] }</p>
				)
			}
			if (keyValue === 'active'){
				return(
					<p>Active?: { obj[keyValue].toString() }</p>
				)
			}
		})
		return result
	}

	render() {
		return (
			<div>
				<Button onClick={ () => { this.props.actions.getHeroService() }}>Get More Heros and Team Information.</Button>
				<br></br>
				{ this.renderTeamInfoCards() }
				{ JSON.stringify(this.props.heros) }	
				{/* need to add my own 4 heros - hard coded */}

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