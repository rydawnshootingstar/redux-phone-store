import phones from './data/mockPhones';

export const getPhones = async () => {
	return new Promise((resolve, reject) => {
		resolve(phones);
	});
};
