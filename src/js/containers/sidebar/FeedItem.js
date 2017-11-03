// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFeed } from '../../actions/action_feeds';
import FeedItem from '../../components/sidebar/FeedItem';

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ removeFeed } ,dispatch);
}

export default connect(null, mapDispatchToProps)(FeedItem);