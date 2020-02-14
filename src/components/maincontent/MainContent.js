import React, { Component } from 'react';
import AddFeed from './AddFeed';
import FeedDetailsArea from './FeedDetailsArea';

class MainContent extends Component {
	render() {
		return (
			<section>
				<AddFeed />
				<FeedDetailsArea />
			</section>
		);
	}
}

export default MainContent;
