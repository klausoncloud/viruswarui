import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import viruswarUIAppReducer from './reducers/reducers';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore( viruswarUIAppReducer, applyMiddleware(thunk) );

ReactDOM.render(
	<Provider store = { store }>
	    <App />
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
