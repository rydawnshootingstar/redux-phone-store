import phones from './data/mockPhones';
import * as R from 'ramda';

export const getPhoneById = (id) => {
	return new Promise((resolve, reject) => {
		const phone = R.find(R.propEq('id', id))(phones);
		if (phone) {
			resolve(phone);
		} else {
			reject({ ApiMessage: 'no phone with this ID exists' });
		}
	});
};
