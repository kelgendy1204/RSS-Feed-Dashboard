import action_types from './action_types' ;

export function addFeed(feed) {
    return {
        type: action_types.ADD_FEED,
        payload: feed
    };
}

export function removeFeed(feed) {
    return {
        type: action_types.REMOVE_FEED,
        payload: feed
    };
}