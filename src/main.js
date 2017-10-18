import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import TicketsApp from './components/TicketsApp.jsx';

import store from './store';

ReactDOM.render(
	<Provider store={store}>
    	<TicketsApp />
    </Provider>,
    document.getElementById('root')
);
