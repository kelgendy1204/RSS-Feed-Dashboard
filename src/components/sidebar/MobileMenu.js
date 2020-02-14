import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu';
import Sidebar from './Sidebar';

class MobileMenu extends Component {
	render() {
		return (
			<div className='mobile-menu'>
				<Menu>
					<Sidebar />
				</Menu>
			</div>
		);
	}
}

export default MobileMenu;
