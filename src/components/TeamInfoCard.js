import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class TeamInfoCard extends Component {

	renderInfo = () => {
		if (this.props.title === 'squadName'){
			return(
				<h1 class="heroGroupS">Squad Name: {this.props.title.squadName}</h1>
			)
		}
		if (this.props.title === 'hometown'){
			return(
				<h2>Hometown: {this.props.title.hometown}</h2>
			)
		}
		if (this.props.title === 'formed'){
			return(
				<p>Former: {this.props.title.formed}</p>
			)
		}
		if (this.props.title === 'secretBase'){
			return(
				<p>Base: {this.props.title.secretBase}</p>
			)
		}
	}

// 0: {squadName: "Super hero squad"}
// 1: {homeTown: "Metro City"}
// 2: {formed: 2016}
// 3: {secretBase: "Super tower"}
// 4: {active: true}
	render(){

		return(
			<li>
				<Card>
					<CardBody>
					{ this.renderInfo() }
					</CardBody>
				</Card>
			</li>
		)
	}
}

export default TeamInfoCard