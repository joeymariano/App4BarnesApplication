import React, { Component } from 'react';
import { Card, CardBody, Button, Input } from 'reactstrap';

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

	addSelectCount = () => {
		if (this.state.selectCount < 10) {
			this.setState({selectCount: this.state.selectCount + 1})
		}
	}

	deleteSelectCount = () => {

		if (this.state.selectCount > 0) {
			this.setState({selectCount:  this.state.selectCount - 1})
		}
	}

	updateCountState = (event) => {
		if (event.target.value <= 10){ // make sure value doesn't go past 10
		 this.setState({
		   [event.target.name]: event.target.value
		 })
		}
	}

	render(){
		return(
				<Card>
					<CardBody>
						<h3>{ this.props.name } / { this.props.secretIdentity }</h3>
						<ul>
							<li>Age: { this.props.age }</li>
							<li>Powers: { this.renderPowers() }</li>
						</ul>
						<p className="float-right">
						<Button className='plus-button' onClick={ () => this.addSelectCount() }>+</Button>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<Input className='hero-count' name='selectCount' type='text' value={ this.state.selectCount } onChange={ this.updateCountState }/>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<Button className='minus-button' onClick={ () => this.deleteSelectCount() }>-</Button>
						</p>
					</CardBody>
				</Card>
		)
	}
}

export default HeroCard