import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { getCategories, getActiveCategoryId } from '../selectors/categories';
import { withRouter } from 'react-router';

class Categories extends Component {
	renderCategory = (category, index) => {
		const activeCategory = category.id === this.props.activeCategoryId;
		return (
			<Link
				to={`/categories/${category.id}`}
				className={`list-group-item ${activeCategory ? 'active' : null}`}
				key={index}
			>
				{category.name}
			</Link>
		);
	};

	renderAllCategories = () => {
		return (
			<Link to={`/`} className={`list-group-item ${!this.props.activeCategoryId ? 'active' : null}`}>
				All
			</Link>
		);
	};
	render() {
		return (
			<div className="well">
				<h4>Shop By Brand</h4>
				<div className="list-group">
					{this.renderAllCategories()}
					{this.props.categories.map((category, index) => this.renderCategory(category, index))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	categories: getCategories(state),
	activeCategoryId: getActiveCategoryId(ownProps),
});

// add withRouter to get access to history, location prop
// we don't already have access because this component isn't rendered in a route
// wrap in compose for readability
export default compose(withRouter, connect(mapStateToProps, null))(Categories);
