// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../../components/sidebar/Sidebar';

function mapStateToProps(state) {
	return {
		feeds: state.feeds,
		activeFeed: state.activeFeed,
	};
}

export default connect(mapStateToProps, null)(Sidebar);