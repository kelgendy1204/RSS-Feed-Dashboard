import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';
import MainContent from './maincontent/MainContent';
import LoadingSpinner from './LoadingSpinner';
import MobileMenu from './sidebar/MobileMenu';

class App extends Component {
	render() {
		return (
			<div className='rss-app'>
				<MobileMenu />
				<LoadingSpinner />
				<Sidebar />
				<MainContent />
			</div>
		);
	}
}

export default App;
