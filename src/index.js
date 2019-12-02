import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = createStore(rootReducer, compose( applyMiddleware(thunk) ))

ReactDOM.render(
	<Provider store={store} >
		<Router>
      		<Route path='/' component={props => <App {...props} />}/>
		</Router>
	</Provider>
, document.getElementById('root'));
