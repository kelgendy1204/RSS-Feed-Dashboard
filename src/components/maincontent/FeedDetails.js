import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedData from './FeedData';

class FeedDetails extends Component {
	constructor(props){
		super(props);
		this.filterkey = this.filterkey.bind(this);
	}

	// filtering feeds data the will be shown
	filterkey(key){
		if((key.includes('rss:') || (key.includes('atom:'))) && (!key.includes(':@')) && (!key.includes(':link')) && (!key.includes(':guid')) && (!key.includes(':id')) ) {
			return key.replace('rss:', '').replace('atom:', '');
		}
		return false;
	}

	render() {
		let feedImage = this.props.data.image.url ? this.props.data.image.url : false;
		return (
			<li className='feed-details'>
				<a target='_blank' rel="noopener noreferrer" href={this.props.data.link ? this.props.data.link : '#'}>
					<div className='img' style={{backgroundImage: feedImage ? 'url(' + feedImage + ')' : ''}}></div>
				</a>
				<div className='content'>
					<h3><a target='_blank' rel="noopener noreferrer" href={this.props.data.link ? this.props.data.link : '#'}>{this.props.data.title}</a></h3>
					<div className='data'>
					{
						Object.keys(this.props.data).map((key, index) => {
							let feedKey = this.filterkey(key);
							if(feedKey) {
								return (<FeedData key={index} data={ {key : feedKey, value : this.props.data[key]['#']} } />);
							}
							return null;
						})
					}
					</div>
				</div>
			</li>
		);
	}
}

FeedDetails.propTypes = {
	data: PropTypes.object.isRequired
};

export default FeedDetails;
