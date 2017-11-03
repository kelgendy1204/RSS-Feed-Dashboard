import action_types from '../actions/action_types';

let defaultActiveFeed = {
	id: 3,
	name: 'tutsplus',
	image: 'https://code.tutsplus.com/categories/rss.atom'
};

export default function (state = defaultActiveFeed, action) {
	switch (action.type) {
		case action_types.ACTIVE_FEED:
			return action.payload;
	}
	return state;
}