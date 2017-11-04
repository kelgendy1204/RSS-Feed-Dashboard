import React, { Component } from 'react';
import PropTypes from 'prop-types';


class FeedData extends Component {

	constructor(props){
		super(props);
		this.createMarkup = this.createMarkup.bind(this);
	}

	createMarkup(html) {
		// for script injection
		html = !html.includes('<script>') ? html : '';
		return {__html: html};
	}

	render() {
		let render = this.props.data.key && this.props.data.value;
		if(render){
			return (
				<p>
					<span className='key'>{this.props.data.key}</span>
					<span>:</span>
					{/* this is very bad and can't be used in a production version*/}
					<span className='value' dangerouslySetInnerHTML={this.createMarkup(this.props.data.value)}></span>
					{/*<span className='value'>{this.props.data.value}</span>*/}
				</p>
			);
		}
		return (
			<p></p>
		);
	}
}

FeedData.propTypes = {
	data: PropTypes.object.isRequired
};

export default FeedData;