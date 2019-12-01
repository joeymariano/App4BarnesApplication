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
import { Card, CardBody, CardTitle } from 'reactstrap';
import TeamInfoCard from './TeamInfoCard'

class HeroService extends Component {

	renderHeroCards = () => {
		let results = this.props.heros.map((obj, idx) => {
			return <HeroCard name={ obj.name } age={ obj.age } secretIdentity={ obj.secretIdentity } powers={ obj.powers } />
		})
		return results
	}

	renderTeamInfoCard = () => {
		if ( this.props.info.length !== 0 ){
			return <Card className="team-info"><CardBody><TeamInfoCard info={ this.props.info }/></CardBody></Card>
		}
	}

	render() {
		return (
			<div>
				<Button onClick={ () => { this.props.actions.getHeroService() }}>Get More Heros and Team Information.</Button>
				<br></br>
				{ this.renderTeamInfoCard() }
				{ this.renderHeroCards() }	
				{/* need to add my own 4 heros - hard coded on mount? */}
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