import { CLEAR_CART } from './actionTypes';

export const clearCart = () => (dispatch) => {
	dispatch({
		type: CLEAR_CART,
	});
};
