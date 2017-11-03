import React, { Component } from 'react';
import Sidebar from '../containers/sidebar/Sidebar';
import MainContent from './maincontent/MainContent';
import PropTypes from 'prop-types';

class App extends Component {
	render() {
		return (
			<div className='rss-app'>
				<div className={'loadercontainer ' + (this.props.loading ? '' : 'hide')}>
					<div className='loader'></div>
				</div>
				<Sidebar />
				<MainContent />
			</div>
		);
	}
}

App.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default App;
