import { REMOVE_PHONE_FROM_CART } from './actionTypes';

export const removePhoneFromCart = (id) => (dispatch) => {
	dispatch({
		type: REMOVE_PHONE_FROM_CART,
		payload: id,
	});
};
