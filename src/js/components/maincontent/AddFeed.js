import React, { Component } from 'react';

class AddFeed extends Component {
	render() {
		return (
			<div className='add-feed'>
				<div className='header'>
					<span>+</span> Add New Feed
				</div>
				<div className='body'>
					<div>
						<label>Feed Name : </label>
						<input type='text' />
					</div>
					<div>
						<label>Feed URL : </label>
						<input type='text' />
					</div>
					<button>
						Add Feed
					</button>
				</div>
			</div>
		);
	}
}

export default AddFeed;