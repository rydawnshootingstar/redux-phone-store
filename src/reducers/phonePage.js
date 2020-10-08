import * as R from 'ramda';

import { FETCH_PHONE_BY_ID_SUCCESS } from '../actions/actionTypes';

export default (state = { id: null }, { type, payload }) => {
	switch (type) {
		case FETCH_PHONE_BY_ID_SUCCESS:
			return R.merge(state, { id: payload.id });
		default:
			return state;
	}
};
