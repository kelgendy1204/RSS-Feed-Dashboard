import action_types from '../actions/action_types';

export default function (state = {}, action) {
	switch (action.type) {
		case action_types.ACTIVATE_FEED:
			return action.payload;
		default:
			return state;
	}
}
