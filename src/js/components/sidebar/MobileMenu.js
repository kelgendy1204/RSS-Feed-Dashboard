import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu';
import Sidebar from '../../containers/sidebar/Sidebar';

class MobileMenu extends Component {
	render() {
		return (
			<Menu>
				<Sidebar />
			</Menu>
		);
	}
}

export default MobileMenu;