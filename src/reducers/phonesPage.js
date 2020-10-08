import * as R from 'ramda';
import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS, SEARCH_PHONES } from '../actions/actionTypes';

export default (state = { ids: [] }, { type, payload }) => {
	switch (type) {
		case FETCH_PHONES_SUCCESS:
			return { ...state, ids: R.pluck('id', payload) };
		case LOAD_MORE_PHONES_SUCCESS:
			const ids = R.pluck('id', payload);
			return R.merge(state, { ids: R.concat(ids, state.ids) });
		case SEARCH_PHONES:
			return R.merge(state, {
				search: payload,
			});
		default:
			return state;
	}
};
