import * as R from 'ramda';
import { getPhoneById } from './phones';

export const getTotalCount = (state) => {
	return state.cart.length;
};

export const getTotalPrice = (state) => {
	const totalPrice = R.compose(
		R.sum,
		R.pluck('price'),
		R.map((id) => getPhoneById(state, id))
	)(state.cart);

	return totalPrice;
};

// a little tricky, remember that compose is right-to left function composition
export const getPhonesInCart = (state) => {
	const phoneCount = (id) => {
		return R.compose(
			R.length,
			R.filter((idInCart) => R.equals(id, idInCart))
		)(state.cart);
	};
	const uniquePhones = R.uniq(state.cart);

	const phoneWithCount = (phone) => {
		return R.assoc('count', phoneCount(phone.id), phone);
	};

	const phones = R.compose(
		R.map(phoneWithCount),
		R.map((id) => getPhoneById(state, id))
	)(uniquePhones);

	return phones;
};
