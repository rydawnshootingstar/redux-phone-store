import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {getTotalCount, getTotalPrice} from '../selectors/cart';

class Cart extends Component{

    render(){
        return (
            <div className="cart">
                <div className="dropdown">
                    <Link to="/cart" id="dLabel" className="btn btn-inverse btn-block btn-lg">
                        <i className="fa fa-fa-shopping-cart"></i>
                        <span>{this.props.totalCount} item(s) - ${this.props.totalPrice}</span>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> ({
    totalCount: getTotalCount(state),
    totalPrice: getTotalPrice(state),
    itemsInCart: state.cart
})

export default connect(mapStateToProps, null)(Cart);