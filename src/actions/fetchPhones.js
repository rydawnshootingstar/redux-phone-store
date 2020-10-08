import { FETCH_PHONES_START, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILURE } from './actionTypes';
import { getPhones } from '../api/getPhones';

export const fetchPhones = () => async (dispatch) => {
	dispatch({ type: FETCH_PHONES_START });

	try {
		const phones = await getPhones();
		dispatch({
			type: FETCH_PHONES_SUCCESS,
			payload: phones,
		});
	} catch (err) {
		dispatch({
			type: FETCH_PHONES_FAILURE,
			payload: err,
			error: true,
		});
	}
};
