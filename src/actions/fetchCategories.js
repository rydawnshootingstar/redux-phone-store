import { FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from './actionTypes';
import { getCategories } from '../api/getCategories';

export const fetchCategories = () => async (dispatch) => {
	dispatch({ type: FETCH_CATEGORIES_START });

	try {
		const categories = await getCategories();
		dispatch({
			type: FETCH_CATEGORIES_SUCCESS,
			payload: categories,
		});
	} catch (err) {
		dispatch({
			type: FETCH_CATEGORIES_FAILURE,
			payload: err,
			error: true,
		});
	}
};
