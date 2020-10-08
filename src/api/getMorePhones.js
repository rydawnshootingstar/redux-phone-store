import phones from './data/mockPhones';
export const getMorePhones = async ({ offset }) => {
	return new Promise((resolve, reject) => {
		resolve(phones);
	});
};
