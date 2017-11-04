import React, { Component } from 'react';
import Sidebar from '../containers/sidebar/Sidebar';
import MainContent from './maincontent/MainContent';
import LoadingSpinner from '../containers/LoadingSpinner';

class App extends Component {
	render() {
		return (
			<div className='rss-app'>
				<LoadingSpinner />
				<Sidebar />
				<MainContent />
			</div>
		);
	}
}

export default App;
