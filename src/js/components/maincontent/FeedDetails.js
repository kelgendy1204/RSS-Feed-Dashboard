import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedData from './FeedData';

class FeedDetails extends Component {
	constructor(props){
		super(props);
		this.filterkey = this.filterkey.bind(this);
	}

	filterkey(key){
		if((key.includes('rss:') || (key.includes('atom:'))) && (!key.includes(':@')) && (!key.includes(':link')) && (!key.includes(':guid')) && (!key.includes(':id')) ) {
			return key.replace('rss:', '').replace('atom:', '');
		}
		return false;
	}

	render() {
		return (
			<li className='feed-details'>
				<div className='img' style={{backgroundImage: this.props.data.image.url}}></div>
				<div className='content'>
					<h3><a target='_blank' href={this.props.data.link ? this.props.data.link : '#'}>{this.props.data.title}</a></h3>
					<div className='data'>
					{
						Object.keys(this.props.data).map((key, index) => {
							let feedKey = this.filterkey(key);
							if(feedKey) {
								return (<FeedData key={index} data={ {key : feedKey, value : this.props.data[key]['#']} } />);
							}
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