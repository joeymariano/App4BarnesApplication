import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'
import HeroCard from './HeroCard'
import { Card, CardBody } from 'reactstrap';
import TeamInfoCard from './TeamInfoCard'

class HeroService extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  heroCount: 0,
		  powerCount: 0
	 	}

	 	this.initialState = this.state;    
	}

	addHeroCount = (amount) => {
			this.setState({heroCount: this.state.heroCount + amount})
	}

	deleteHeroCount = (amount) => {
			this.setState({heroCount:  this.state.heroCount - amount})
	}

	addPowerCount = (amount) => {
			this.setState({powerCount: this.state.powerCount + amount})
	}

	deletePowerCount = (amount) => {
			this.setState({powerCount:  this.state.powerCount - amount})
	}

	componentDidMount() {
		// when component mounts add superheros to redux store in this format
		let newHeros = 
		[
			{ name: "Art Woman", age: 68, secretIdentity: "Jan Fan Jan", 
				powers: ["Photographic Memory", "Historical Accuracy", "Infinite Paint"] },
			{ name: "Super Creative", age: 19, secretIdentity: "Daisy Oopsie", 
				powers: ["Paint Faint", "Statistical Superiority", "Creative Block"] },
			{ name: "Muse", age: 39, secretIdentity: "Whoa Joe", 
				powers: ["Perfect Pitch", "Synesthesia", "Vibration Shock"] }
		]

		this.props.actions.addHeros(newHeros)
	}

	renderHeroCards = () => {
		let results = this.props.heros.map((obj, idx) => {
			return <HeroCard name={ obj.name } age={ obj.age } secretIdentity={ obj.secretIdentity } powers={ obj.powers } />
		})
		return results
	}

	renderTeamInfoCard = () => {
		if ( this.props.info.length !== 0 ){
			return <Card><CardBody><TeamInfoCard info={ this.props.info }/></CardBody></Card>
		}
	}

	render() {
		return (
			<div>
				<Button onClick={ () => { this.props.actions.getHeroService() }}>Get More Heros and Team Information.</Button>
				<br></br>
				{ this.renderTeamInfoCard() }
				{ this.renderHeroCards() }
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