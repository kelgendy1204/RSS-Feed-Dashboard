import action_types from '../actions/action_types';

export default function (state = [], action) {
	switch (action.type) {
		case action_types.GET_FEEDS:
			return action.payload;
		case action_types.ADD_FEED:
			return [
				...state,
				action.payload
			];
		case action_types.REMOVE_FEED:
			return [
				...state.filter(elem => elem.id != action.payload.id)
			];
		default:
			return state;
	}
}
