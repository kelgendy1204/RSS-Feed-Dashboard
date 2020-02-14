import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import FeedDetails from './FeedDetails';
import PropTypes from 'prop-types';

class FeedDetailsArea extends Component {

	constructor(props){
		super(props);
		this.state = { entries: [] };
	}

	componentDidMount() {
		if(this.props.activeFeed.id){
			this.loadXml(this.props.activeFeed.url);
		}
	}

	componentWillReceiveProps(nextProps){
		if(!nextProps.activeFeed.id){
			this.setState({
				entries: []
			});
			return;
		}
		if(this.props.activeFeed.id != nextProps.activeFeed.id){
			this.loadXml(nextProps.activeFeed.url);
		}
	}

	// loading xml data using feednami service
	loadXml(url){
		this.props.startLoading();
        // eslint-disable-next-line
		feednami.load(url).then(({entries}) => {
			this.props.endLoading();
			this.setState({
				entries
			});
		}).catch(() => {
			this.props.endLoading();
			this.setState({
				entries: []
			});
			alert('Not rss feeds');
		});
	}

	render() {
		return (
			<div className='feed-details-area'>
				<Scrollbars>
					<ul>

						{this.state.entries.map((item, key) => {
							return <FeedDetails data={item} key={key}/>;
						})}

					</ul>
				</Scrollbars>
			</div>
		);
	}
}

FeedDetailsArea.propTypes = {
	activeFeed: PropTypes.object.isRequired,
	startLoading: PropTypes.func.isRequired,
	endLoading: PropTypes.func.isRequired
};

export default FeedDetailsArea;
