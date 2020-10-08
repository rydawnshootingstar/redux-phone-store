import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhoneById } from '../actions/fetchPhoneById';
import { getPhoneById } from '../selectors/phones';
import { Link } from 'react-router-dom';
import { addPhoneToCart } from '../actions/addPhoneToCart';
import * as R from 'ramda';

import Cart from './Cart';

class Phone extends Component {
	componentDidMount() {
		const phoneId = this.props.match.params.id;
		this.props.fetchPhoneById(phoneId);
	}

	renderField = () => {
		const { phone } = this.props;
		const columnField = R.compose(
			R.toPairs,
			R.pick(['cpu', 'camera', 'size', 'weight', 'display', 'battery', 'memory'])
		)(phone);

		console.log(columnField);
		return columnField.map(([key, value], index) => (
			<div key={key} className="column">
				<div className="ab-details-title">
					<p>{key}</p>
					<div className="ab-details-info">{value}</div>
				</div>
			</div>
		));
	};

	renderSidebar = () => {
		const { phone, addPhoneToCart } = this.props;
		return (
			<div>
				<p className="lead">Quick Shop</p>
				<Cart />
				<div className="form-group">
					<h1>{phone.name}</h1>
					<h2>${phone.price}</h2>
				</div>
				<Link to="/" className="btn btn-info btn-block">
					Back to Store
				</Link>
				<button type="button" className="btn btn-success btn-block" onClick={() => addPhoneToCart(phone.id)}>
					Add to Cart
				</button>
			</div>
		);
	};

	renderContent = () => {
		const { phone } = this.props;
		const test = { a: 1, b: 2 };
		console.log('no ramda', test['c']);
		console.log('ramda', R.path('c', test));
		return (
			<div className="thumbnail">
				<div className="row">
					<div className="col-md-6">
						<img className="img-thumbnail" src={phone.image} alt={phone.name} />
					</div>
					<div className="col-md-6">{this.renderField()}</div>
				</div>
				<div className="caption-full">
					<h4 className="pull-right">${phone.price}</h4>
					<h4>{phone.name}</h4>
					<p>{phone.description}</p>
				</div>
			</div>
		);
	};
	render() {
		return (
			<div className="view-container">
				<div className="container">
					<div className="row">
						<div className="col-md-9">{this.props.phone && this.renderContent()}</div>

						<div className="col-md-3">{this.props.phone && this.renderSidebar()}</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	fetchPhoneById,
	addPhoneToCart,
};

const mapStateToProps = (state) => ({
	phone: getPhoneById(state, state.phonePage.id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
