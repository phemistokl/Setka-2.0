import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App.jsx';
import TicketsBox from './components/Tickets/TicketsBox.jsx';
import Dashboard from './components/Dashboard/TicketsBox.jsx';

import store from './store';

const routes = (
		<Route component={App}>
				<Redirect from="/" to="dashboard" />
				<Route path="tickets" component={TicketsBox} />
				<Route path="dashboard" component={Dashboard} />
		</Route>
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
		<Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
