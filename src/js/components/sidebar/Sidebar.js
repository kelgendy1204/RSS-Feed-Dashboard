import React, { Component } from 'react';
import FeedItem from '../../containers/sidebar/FeedItem';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';

class Sidebar extends Component {
	render() {
		return (
			<aside>
				<Scrollbars>
					<h1>MY FEED</h1>

					{this.props.feeds.map((elem , key) => <FeedItem data={elem} key={key} />)}

				</Scrollbars>
			</aside>
		);
	}
}

Sidebar.propTypes = {
	feeds: PropTypes.array.isRequired
};

export default Sidebar;