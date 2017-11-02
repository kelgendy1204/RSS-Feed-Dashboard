import React, { Component } from 'react';

class FeedItem extends Component {
	render() {
		return (
			<div role='button' className='feed-item'>
				<h2>Wuzzuf</h2>
				<button className='close'>X</button>
			</div>
		);
	}
}

export default FeedItem;