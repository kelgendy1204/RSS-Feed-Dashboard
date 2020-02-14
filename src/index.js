import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Reducers from './reducers';
import './styles/style.scss';

let store = createStore(
	Reducers,
	// for development purpose
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const RssFeeds = ({ store }) => (
	<Provider store={store}>
		<App />
	</Provider>
);

RssFeeds.propTypes = {
	store: PropTypes.object.isRequired
};

ReactDOM.render(
	<RssFeeds store={store} />,
	document.getElementById('root')
);
