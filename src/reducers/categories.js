import { FETCH_CATEGORIES_SUCCESS } from '../actions/actionTypes';

import * as R from 'ramda';

// initial state, action
export default (state = {}, { type, payload }) => {
	switch (type) {
		case FETCH_CATEGORIES_SUCCESS:
			const newValues = R.indexBy(R.prop('id'), payload);
			return R.merge(state, newValues);
		default:
			return state;
	}
};
