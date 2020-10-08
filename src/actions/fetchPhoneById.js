import { FETCH_PHONE_BY_ID_START, FETCH_PHONE_BY_ID_SUCCESS, FETCH_PHONE_BY_ID_FAILURE } from './actionTypes';
import { getPhoneById } from '../api/getPhoneById';

export const fetchPhoneById = (id) => async (dispatch) => {
	dispatch({ type: FETCH_PHONE_BY_ID_START });
	try {
		const phone = await getPhoneById(id);
		dispatch({
			type: FETCH_PHONE_BY_ID_SUCCESS,
			payload: phone,
		});
	} catch (err) {
		dispatch({
			type: FETCH_PHONE_BY_ID_FAILURE,
			payload: err,
			error: true,
		});
	}
};
