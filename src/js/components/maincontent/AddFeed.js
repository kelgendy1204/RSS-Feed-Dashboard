import React, { Component } from 'react';

class AddFeed extends Component {

	constructor(props){
		super(props);
		this.addFeed = this.addFeed.bind(this);
	}

	addFeed(e){
		e.preventDefault();

		let id = this.props.feeds.length + 1;
		let name = this.feedName.value;
		let url = this.feedUrl.value;

		this.props.addFeed({
			id, name, url
		});

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
						<input required title="url to xml file" pattern=".+\.xml$" type='text' ref={(input) => { this.feedUrl = input; }} />
					</div>
					<button type='submit'>
						Add Feed
					</button>
				</form>
			</div>
		);
	}
}

export default AddFeed;