import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import phones from './phones';
import phonesPage from './phonesPage';
import phonePage from './phonePage';
import cart from './cart';
import categories from './categories';

const createRootReducer = (history) => {
	return combineReducers({
		router: connectRouter(history),
		phones,
		phonesPage,
		phonePage,
		cart,
		categories,
	});
};

export default createRootReducer;
