import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Layout extends Component {
	render() {
		return (
			<div className="view-container">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<Sidebar />
						</div>
						<div className="col-md-9">{this.props.children}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Layout;
