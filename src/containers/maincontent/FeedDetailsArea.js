import { connect } from 'react-redux';
import FeedDetailsArea from '../../components/maincontent/FeedDetailsArea';
import { bindActionCreators } from 'redux';
import * as loader from '../../actions/action_loading';


function mapStateToProps(state) {
	return {
		activeFeed: state.activeFeed
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(loader ,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedDetailsArea);