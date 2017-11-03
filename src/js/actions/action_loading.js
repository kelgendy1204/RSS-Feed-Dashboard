import action_types from './action_types' ;

export function endLoading() {
	return {
		type: action_types.END_LOADING
	};
}

export function startLoading() {
	return {
		type: action_types.START_LOADING
	};
}