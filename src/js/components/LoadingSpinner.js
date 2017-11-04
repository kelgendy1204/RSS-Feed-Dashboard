import React, { Component } from 'react';
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

export default LoadingSpinner;
