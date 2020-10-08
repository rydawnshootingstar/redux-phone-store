import * as R from 'ramda';
import { getActiveCategoryId } from './categories';

export const getPhoneById = (state, id) => {
	return R.prop(id, state.phones);
};

// get phones for phones page, also apply search filter on phones page
export const getPhones = (state, ownProps) => {
	const activeCategoryIdExists = getActiveCategoryId(ownProps);

	const applySearch = (item) => {
		if (R.isNil(state.phonesPage.search)) {
			return item;
		} else {
			return R.includes(state.phonesPage.search, R.prop('name', item));
		}
	};

	const applyCategory = (item) => {
		return R.equals(activeCategoryIdExists, R.prop('categoryId', item));
	};

	const phones = R.compose(
		R.filter(applySearch),
		R.when(R.always(activeCategoryIdExists), R.filter(applyCategory)), // when the function returns true, apply the filter
		R.map((id) => getPhoneById(state, id))
	)(state.phonesPage.ids);

	return phones;
};
