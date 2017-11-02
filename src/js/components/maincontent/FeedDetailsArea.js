import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import FeedDetails from './FeedDetails';

class FeedDetailsArea extends Component {
	render() {
		return (
			<div className='feed-details-area'>
				<Scrollbars>
					<ul>
						<FeedDetails />
						<FeedDetails />
						<FeedDetails />
						<FeedDetails />
						<FeedDetails />
						<FeedDetails />
						<FeedDetails />
						<FeedDetails />
						<FeedDetails />
					</ul>
				</Scrollbars>
			</div>
		);
	}
}

export default FeedDetailsArea;