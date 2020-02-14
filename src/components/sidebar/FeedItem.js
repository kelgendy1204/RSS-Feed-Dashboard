import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFeed, activateFeed } from '../../actions/action_feeds';
import PropTypes from 'prop-types';

class FeedItem extends Component {

	constructor(props){
		super(props);
		this.removeFeed = this.removeFeed.bind(this);
		this.activateFeed = this.activateFeed.bind(this);
	}

	removeFeed(event){
		// stop event propagation to prevent feed activation
		event.stopPropagation();
        // eslint-disable-next-line
		if(confirm('Are you sure you want to delete this feed?')){
			this.props.removeFeed(this.props.data);
			// remove feed activation if exist
			if( this.props.activeFeed.id == this.props.data.id ) {
				this.props.activateFeed({});
			}
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ removeFeed, activateFeed } ,dispatch);
}

function mapStateToProps(state) {
	return {
		activeFeed: state.activeFeed
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedItem);
