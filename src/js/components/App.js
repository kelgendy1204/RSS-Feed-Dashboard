import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';
import MainContent from './maincontent/MainContent';

class App extends Component {
	render() {
		return (
			<div className='rss-app'>
				<Sidebar />
				<MainContent />
			</div>
		);
	}
}

export default App;
