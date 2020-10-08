import { SEARCH_PHONES } from './actionTypes';

export const searchPhones = (text) => (dispatch) => {
	dispatch({
		type: SEARCH_PHONES,
		payload: text,
	});
};
