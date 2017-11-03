import action_types from '../actions/action_types';

let defaultActiveFeed = {
	id: 3,
	name: 'tutsplus',
	url: 'https://code.tutsplus.com/categories/rss.atom'
};

export default function (state = defaultActiveFeed, action) {
	switch (action.type) {
		case action_types.ACTIVATE_FEED:
			return action.payload;
	}
	return state;
}