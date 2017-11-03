import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import FeedDetails from './FeedDetails';
import PropTypes from 'prop-types';

class FeedDetailsArea extends Component {

	constructor(props){
		super(props);
	}

	loadXml(){
		feednami.load(this.props.activeFeed.url).then(feed => {
			console.log(feed);
		});
	}

	render() {
		this.loadXml();
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

FeedDetailsArea.propTypes = {
	activeFeed: PropTypes.object.isRequired
};

export default FeedDetailsArea;