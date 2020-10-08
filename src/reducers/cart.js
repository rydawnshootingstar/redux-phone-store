import * as R from 'ramda';

import { ADD_PHONE_TO_CART, REMOVE_PHONE_FROM_CART, CLEAR_CART } from '../actions/actionTypes';

export default (state = [], { type, payload }) => {
	switch (type) {
		case ADD_PHONE_TO_CART:
			return R.append(payload, state);
		case REMOVE_PHONE_FROM_CART:
			return R.without(R.of(payload), state); // without takes 2 arrays as arguments, of creates an array from argument
		case CLEAR_CART:
			return [];
		default:
			return state;
	}
};
