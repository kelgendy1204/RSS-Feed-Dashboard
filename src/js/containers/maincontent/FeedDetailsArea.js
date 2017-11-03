import { connect } from 'react-redux';
import FeedDetailsArea from '../../components/maincontent/FeedDetailsArea';

function mapStateToProps(state) {
	return {
		activeFeed: state.activeFeed
	};
}

export default connect(mapStateToProps, null)(FeedDetailsArea);