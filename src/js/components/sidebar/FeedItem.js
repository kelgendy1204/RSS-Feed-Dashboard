import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedItem extends Component {
	render() {
		return (
			<div role='button' className='feed-item'>
				<h2>{this.props.data.name}</h2>
				<button className='close'>X</button>
			</div>
		);
	}
}

FeedItem.propTypes = {
	data: PropTypes.object.isRequired
};

export default FeedItem;