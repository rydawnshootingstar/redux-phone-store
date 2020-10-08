import { LOAD_MORE_PHONES_FAILURE, LOAD_MORE_PHONES_START, LOAD_MORE_PHONES_SUCCESS } from './actionTypes';
import { getMorePhones } from '../api/getMorePhones';
import { getRenderedPhonesLength } from '../selectors/getRenderedPhonesLength';

export const loadMorePhones = () => async (dispatch, getState) => {
	const offset = getRenderedPhonesLength(getState());
	dispatch({ type: LOAD_MORE_PHONES_START });

	try {
		const phones = await getMorePhones({ offset });
		dispatch({
			type: LOAD_MORE_PHONES_SUCCESS,
			payload: phones,
		});
	} catch (err) {
		dispatch({
			type: LOAD_MORE_PHONES_FAILURE,
			payload: err,
			error: true,
		});
	}
};
