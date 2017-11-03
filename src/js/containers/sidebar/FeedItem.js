// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFeed, activateFeed } from '../../actions/action_feeds';
import FeedItem from '../../components/sidebar/FeedItem';

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ removeFeed, activateFeed } ,dispatch);
}

function mapStateToProps(state) {
	return {
		activeFeed: state.activeFeed
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedItem);