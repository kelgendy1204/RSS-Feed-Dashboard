import React, { Component } from 'react';
import AddFeed from '../../containers/maincontent/AddFeed';
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