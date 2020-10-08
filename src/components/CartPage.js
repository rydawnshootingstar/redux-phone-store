import React from 'react';
import { connect } from 'react-redux';
import { getPhonesInCart, getTotalPrice } from '../selectors/cart';
import { removePhoneFromCart } from '../actions/removePhoneFromCart';
import { clearCart } from '../actions/clearCart';
import { checkout } from '../actions/checkout';
import * as R from 'ramda';
import { Link } from 'react-router-dom';

const CartPage = ({ phones, totalPrice, removePhoneFromCart, clearCart, checkout }) => {
	const isCartEmpty = R.isEmpty(phones);

	const renderContent = () => (
		<div>
			{isCartEmpty && <div>No items in shopping cart.</div>}
			<div className="table-responsive">
				<table className="table-border table-striped table-condensed cf">
					<tbody>
						{phones.map((phone, index) => (
							<tr key={index} className="item-checout">
								<td className="first-column-checkout">
									<img className="img-thumbnail" src={phone.image} alt={phone.name} />
								</td>
								<td>{phone.name}</td>
								<td>${phone.price}</td>
								<td>{phone.count}</td>
								<td>
									<span onClick={() => removePhoneFromCart(phone.id)} className="delete-cart"></span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{!isCartEmpty && (
				<div className="row">
					<div className="pull-right total-user-checkout">
						<b>Total:</b>${totalPrice}
					</div>
				</div>
			)}
		</div>
	);

	const renderSidebar = () => (
		<div>
			<Link className="btn btn-info" to={`/`}>
				<span className="glyphicon glyphicon-info-sign">
					<span> Continue Shopping</span>
				</span>
			</Link>
			{!isCartEmpty && (
				<div>
					<button className="btn btn-danger" onClick={clearCart}>
						<span className="glyphicon glyphicon-trash"></span>
						Empty Cart
					</button>
					<button onClick={() => checkout(phones)} className="btn btn-success">
						<span className="glyphicon glyphicon-envelope">Checkout</span>
					</button>
				</div>
			)}
		</div>
	);

	return (
		<div className="view-container">
			<div className="container">
				<div className="row">
					<div className="col-md-9">{renderContent()}</div>
					<div className="col-md-3">{renderSidebar()}</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	phones: getPhonesInCart(state),
	totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = {
	removePhoneFromCart,
	clearCart,
	checkout,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
