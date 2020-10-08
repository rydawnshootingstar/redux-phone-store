import React, { Component } from 'react';
import Cart from './Cart';
import Search from './Search';
import Categories from './Categories';

class Sidebar extends Component {
	render() {
		return (
			<div>
				Sidebar Component
				<Cart />
				<Search />
				<Categories />
			</div>
		);
	}
}

export default Sidebar;
