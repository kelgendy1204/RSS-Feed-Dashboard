import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LoadingSpinner extends Component {
	render() {
		return (
			<div className={'loadercontainer ' + (this.props.loading ? '' : 'hide')}>
				<div className='loader'></div>
			</div>
		);
	}
}

LoadingSpinner.propTypes = {
	loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		loading: state.loading
	};
}

export default connect(mapStateToProps, null)(LoadingSpinner);
