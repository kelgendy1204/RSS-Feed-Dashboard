import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedItem extends Component {

	constructor(props){
		super(props);
		this.removeFeed = this.removeFeed.bind(this);
	}

	removeFeed(){
		this.props.removeFeed(this.props.data);
	}

	render() {
		return (
			<div role='button' className={'feed-item ' + (this.props.isActive ? 'active' : '')}>
				<h2>{this.props.data.name}</h2>
				<button className='close' onClick={this.removeFeed}>X</button>
			</div>
		);
	}
}

FeedItem.propTypes = {
	data: PropTypes.object.isRequired,
	isActive: PropTypes.bool.isRequired,
	removeFeed: PropTypes.func.isRequired
};

export default FeedItem;