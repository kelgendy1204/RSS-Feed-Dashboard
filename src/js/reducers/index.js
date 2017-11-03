import { combineReducers } from 'redux';
import feeds from './reducer_feeds';

const rootReducer = combineReducers({
	feeds
});

export default rootReducer;