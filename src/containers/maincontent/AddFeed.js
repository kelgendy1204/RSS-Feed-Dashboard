// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFeed } from '../../actions/action_feeds';
import AddFeed from '../../components/maincontent/AddFeed';

function mapStateToProps(state) {
	return {
		feeds: state.feeds
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addFeed } ,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFeed);