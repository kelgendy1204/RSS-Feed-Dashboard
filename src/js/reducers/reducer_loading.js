import action_types from '../actions/action_types';

let defaultLoading = false;

export default function (state = defaultLoading, action) {
	switch (action.type) {
		case action_types.START_LOADING:
			return true;
		case action_types.END_LOADING:
			return false;
	}
	return state;
}