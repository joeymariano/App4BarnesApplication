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

class HeroService extends Component {
	renderTeamInfoCards = () => {
		let result = this.props.info.map((obj, idx) => {
			let keyValue = Object.keys(obj).toString()

			if (keyValue === 'squadName'){
				return <h1 class='heroGroup'>Squad Name: { obj[keyValue] }</h1>
			}
			if (keyValue === 'homeTown'){
				return <h2>Hometown: { obj[keyValue] }</h2>
			}
			if (keyValue === 'formed'){
				return <p>Formed: { obj[keyValue] } </p>
			}
			if (keyValue === 'secretBase'){
				return <p>Secrect Base: { obj[keyValue] }</p>
			}
			if (keyValue === 'active'){
				return <p>Active?: { obj[keyValue].toString() }</p>
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