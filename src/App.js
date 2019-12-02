import React from 'react';
import './App.css';
import Home from './containers/Home'
import Confirmation from './containers/Confirmation'
import Logo from './components/Logo'
import { Container, Row, Col } from 'reactstrap';
import { Route, Switch } from "react-router-dom";

export default function App() {
    return (
    	<Container>
				<Row>
					<Col xs="4">
						<Logo />
					</Col>
				</Row>

				<Switch>
				<Route path="/confirmation">
	    		<Confirmation />
	    	</Route>
	    	<Route path="/">
	    		<Home />
	    	</Route>
	    	</Switch>
    	</Container>
    )
}