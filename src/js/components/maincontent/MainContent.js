import React, { Component } from 'react';
import AddFeed from './AddFeed';
import FeedDetails from './FeedDetails';


class MainContent extends Component {
	render() {
		return (
			<section>
				<AddFeed />
				{/*<FeedDetails />*/}
			</section>
		);
	}
}

export default MainContent;