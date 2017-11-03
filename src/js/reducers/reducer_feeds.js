import action_types from '../actions/action_types';

let defaultFeeds = [
	{
		id: 1,
		name: 'wuzzuf',
		url : 'https://wuzzuf.net/feeds/all-jobs.xml'
	},
	{
		id: 2,
		name: 'bbc',
		url: 'http://feeds.bbci.co.uk/arabic/rss.xml',
	},
	{
		id: 3,
		name: 'tutsplus',
		url: 'https://code.tutsplus.com/categories/rss.atom'
	}
];


export default function (state = defaultFeeds, action) {
	switch (action.type) {
		case action_types.ADD_FEED:
			return [
				...state,
				action.payload
			];
		case action_types.REMOVE_FEED:
			return [
				...state.filter(elem => elem.id != action.payload.id)
			];
	}
	return state;
}