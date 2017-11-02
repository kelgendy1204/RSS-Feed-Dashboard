import React, { Component } from 'react';

class FeedDetails extends Component {
	render() {
		return (
			<li className="feed-details">
				<div className="img" style={{backgroundImage: 'url(http://lorempixel.com/250/160)'}}></div>
				<div className="content">
					<h3>Out door sale</h3>
					<div className='data'>
						<p><span className='key'>Location</span> <span>:</span> <span className='value'>Cairo</span></p>
						<p><span className='key'>Location</span> <span>:</span> <span className='value'>Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo Cairo</span></p>
						<p><span className='key'>Location</span> <span>:</span> <span className='value'>Cairo</span></p>
						<p><span className='key'>Location</span> <span>:</span> <span className='value'>Cairo</span></p>
						<p><span className='key'>Location</span> <span>:</span> <span className='value'>Cairo</span></p>
					</div>
				</div>
			</li>
		);
	}
}

export default FeedDetails;