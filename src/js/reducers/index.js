import { combineReducers } from 'redux';
import feeds from './reducer_feeds';
import activeFeed from './reducer_activeFeed';

const rootReducer = combineReducers({
	feeds,
	activeFeed,
});

export default rootReducer;