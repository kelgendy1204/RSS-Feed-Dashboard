// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../../components/sidebar/Sidebar';
import { bindActionCreators } from 'redux';
import { getFeeds } from '../../actions/action_feeds';

function mapStateToProps(state) {
	return {
		feeds: state.feeds,
		activeFeed: state.activeFeed,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getFeeds } ,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);