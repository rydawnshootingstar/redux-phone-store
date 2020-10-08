import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchPhones } from '../actions/searchPhones';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.searchPhones(this.state.value);
	};

	render() {
		return (
			<div className="well blosd">
				<h3 className="lead">Quick Shop</h3>
				<div className="input-group">
					<form onSubmit={this.handleSubmit}>
						<input
							value={this.state.value}
							onChange={this.handleChange}
							type="text"
							className="form-control"
						></input>
					</form>
					<span className="input-group-btn">
						<button onClick={this.handleSubmit} className="btn btn-default">
							<span className="glyphicon glyphicon-search"></span>
						</button>
					</span>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	searchPhones,
};

export default connect(null, mapDispatchToProps)(Search);
