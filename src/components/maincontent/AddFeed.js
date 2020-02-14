import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddFeed extends Component {

	constructor(props){
		super(props);
		this.addFeed = this.addFeed.bind(this);
	}

	addFeed(e){
		e.preventDefault();

		let name = this.feedName.value;
		let url = this.feedUrl.value;

		this.props.addFeed({ name, url });

		this.feedName.value = '';
		this.feedUrl.value = '';
	}

	render() {
		return (
			<div className='add-feed'>
				<div className='header'>
					<span>+</span> Add New Feed
				</div>
				<form onSubmit={this.addFeed} className='body'>
					<div>
						<label>Feed Name : </label>
						<input required type='text' ref={(input) => { this.feedName = input; }} />
					</div>
					<div>
						<label>Feed URL : </label>
						<input required title='http(s)://link_to_rss_file' pattern='https?://.+' type='text' ref={(input) => { this.feedUrl = input; }} />
					</div>
					<button type='submit'>
						Add Feed
					</button>
				</form>
			</div>
		);
	}
}

AddFeed.propTypes = {
	addFeed: PropTypes.func.isRequired,
	feeds: PropTypes.array.isRequired
};

export default AddFeed;