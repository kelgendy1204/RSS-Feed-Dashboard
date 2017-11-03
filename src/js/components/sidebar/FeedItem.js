import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedItem extends Component {

	constructor(props){
		super(props);
		this.removeFeed = this.removeFeed.bind(this);
		this.activateFeed = this.activateFeed.bind(this);
	}

	removeFeed(event){
		event.stopPropagation();
		this.props.removeFeed(this.props.data);
		if( this.props.activeFeed.id == this.props.data.id ) {
			this.props.activateFeed({});
		}
	}

	activateFeed(){
		this.props.activateFeed(this.props.data);
	}

	render() {
		return (
			<div onClick={this.activateFeed} role='button' className={'feed-item ' + (this.props.isActive ? 'active' : '')}>
				<h2>{this.props.data.name}</h2>
				<button className='close' onClick={this.removeFeed}>X</button>
			</div>
		);
	}
}

FeedItem.propTypes = {
	data: PropTypes.object.isRequired,
	isActive: PropTypes.bool.isRequired,
	activeFeed: PropTypes.object.isRequired,
	removeFeed: PropTypes.func.isRequired,
	activateFeed: PropTypes.func.isRequired
};

export default FeedItem;