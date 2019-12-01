import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class HeroCard extends Component {

	renderPowers = () => {
		let results = this.props.powers.map((string) => {
			return <div class="powers-list">{ string }</div>
		})
		return results
	}

	render(){
		return(
				<Card>
					<CardBody>
						<h3>{ this.props.name }</h3>
						<ul>
							<li>Age: { this.props.age }</li>
							<li>Secret Identity: { this.props.secretIdentity }</li>
							<li>Powers: { this.renderPowers() }</li>
						</ul>
					</CardBody>
				</Card>
		)
	}
}

export default HeroCard