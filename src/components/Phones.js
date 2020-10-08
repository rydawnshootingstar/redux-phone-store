import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhones } from '../actions/fetchPhones';
import { getPhones } from '../selectors/phones';
import { Link } from 'react-router-dom';
import { loadMorePhones } from '../actions/loadMorePhones';
import { addPhoneToCart } from '../actions/addPhoneToCart';
import { fetchCategories } from '../actions/fetchCategories';
import Layout from './Layout';
import * as R from 'ramda';

class Phones extends Component {
	componentDidMount() {
		this.props.fetchPhones();
		this.props.fetchCategories();
	}

	renderPhone = (phone, index) => {
		const shortDescription = `${R.take(60, phone.description)}...`;
		const { addPhoneToCart } = this.props;
		return (
			<div key={index} className="col-sm-4 col-lg-4 col-md-4 book-list">
				<div className="thumbnail">
					<img className="img-thumbnail" src={phone.image} alt={phone.name} />
					<div className="caption">
						<h4 className="pull-right">${phone.price}</h4>
						<h4>
							<Link to={`/phones/${phone.id}`}>{phone.name}</Link>
						</h4>
						<p>{shortDescription}</p>

						<p className="item-button">
							<button className="btn btn-primary" onClick={() => addPhoneToCart(phone.id)}>
								Buy Now
							</button>
							<Link className="btn btn-default" to={`/phones/${phone.id}`}>
								More Info
							</Link>
						</p>
					</div>
				</div>
			</div>
		);
	};

	render() {
		const { phones, loadMorePhones } = this.props;
		return (
			<Layout>
				<div className="books-row">{phones.map((phone, index) => this.renderPhone(phone, index))}</div>
				<div className="row">
					<div className="col-md-12">
						<button className="pull-right btn btn-primary" onClick={loadMorePhones}>
							More Phones
						</button>
					</div>
				</div>
			</Layout>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	phones: getPhones(state, ownProps),
});

const mapDispatchToProps = {
	fetchPhones,
	loadMorePhones,
	addPhoneToCart,
	fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
