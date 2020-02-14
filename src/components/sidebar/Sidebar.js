import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFeeds } from '../../actions/action_feeds';
import FeedItem from './FeedItem';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';

class Sidebar extends Component {

	componentDidMount() {
		this.props.getFeeds();
	}

	render() {
		return (
			<aside>
				<Scrollbars>
					<h1>MY FEED</h1>
					{this.props.feeds.map((elem , key) => <FeedItem isActive={this.props.activeFeed.id == elem.id} data={elem} key={key} />)}
				</Scrollbars>
			</aside>
		);
	}
}

Sidebar.propTypes = {
	feeds: PropTypes.array.isRequired,
	getFeeds: PropTypes.func.isRequired,
	activeFeed: PropTypes.object.isRequired
};

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
