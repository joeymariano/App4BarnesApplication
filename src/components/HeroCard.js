import React, { Component } from 'react';
import { Card, CardBody, Button } from 'reactstrap';

class HeroCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  selectCount: 0
	 	}

	 	this.initialState = this.state;    
	}


	renderPowers = () => {
		let results = this.props.powers.map((string) => {
			return <div class="powers-list">{ string }</div>
		})
		return results
	}

	addSelectCount = () => this.setState({selectCount: this.state.selectCount + 1})

	deleteSelectCount = () => {

		if (this.state.selectCount > 0) {
			this.setState({selectCount:  this.state.selectCount - 1})
		}
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
						<Button onClick={ () => this.addSelectCount() }>Add</Button> + { this.state.selectCount } - <Button onClick={ () => this.deleteSelectCount() }>Delete</Button>
					</CardBody>
				</Card>
		)
	}
}

export default HeroCard