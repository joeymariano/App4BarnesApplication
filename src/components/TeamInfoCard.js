import React, { Component } from 'react';

class TeamInfoCard extends Component {
	renderTeamInfoCard = () => {
		let result = this.props.info.map((obj) => {
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

	render(){
		return this.renderTeamInfoCard()
	}
}

export default TeamInfoCard