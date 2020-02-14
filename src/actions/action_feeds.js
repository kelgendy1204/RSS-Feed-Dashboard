import action_types from './action_types' ;
import storage from '../helpers/storage';

export function addFeed({name, url}) {
	let feed = { id: storage.generateUniqueId(), name, url};
	storage.saveFeed(feed);
	return {
		type: action_types.ADD_FEED,
		payload: feed
	};
}

export function activateFeed(feed) {
	return {
		type: action_types.ACTIVATE_FEED,
		payload: feed
	};
}

export function removeFeed(feed) {
	storage.deleteFeed(feed);
	return {
		type: action_types.REMOVE_FEED,
		payload: feed
	};
}

export function getFeeds() {
	return {
		type: action_types.GET_FEEDS,
		payload: storage.getFeeds()
	};
}