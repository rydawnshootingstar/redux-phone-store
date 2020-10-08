import categories from './data/mockCategories';

export const getCategories = async () => {
	return new Promise((resolve, reject) => {
		resolve(categories);
	});
};
