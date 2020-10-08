import * as R from 'ramda';

export const getCategories = (state) => {
	return R.values(state.categories);
};

// alternate "safer" way using R.path
export const getActiveCategoryId = (ownProps) => {
	return R.path(['match', 'params', 'id'], ownProps);
	//return ownProps.match.params.id;
};
