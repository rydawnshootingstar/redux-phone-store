import { ADD_PHONE_TO_CART } from './actionTypes';

export const addPhoneToCart = (id) => (dispatch) => {
	dispatch({
		type: ADD_PHONE_TO_CART,
		payload: id,
	});
};
