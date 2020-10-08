import Phones from '../components/Phones';
import Phone from '../components/Phone';
import React from 'react';
import { Switch, Route } from 'react-router';
import CartPage from '../components/CartPage';

export default (
	<Switch>
		<Route path="/" component={Phones} exact />
		<Route path="/cart" component={CartPage} exact />
		<Route path="/categories/:id" component={Phones} />
		<Route path="/phones/:id" component={Phone} />
	</Switch>
);
