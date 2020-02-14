import { combineReducers } from 'redux';
import feeds from './reducer_feeds';
import activeFeed from './reducer_activeFeed';
import loading from './reducer_loading';

const rootReducer = combineReducers({
	loading,
	feeds,
	activeFeed,
});

export default rootReducer;