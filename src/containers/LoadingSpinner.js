import { connect } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner';

function mapStateToProps(state) {
	return {
		loading: state.loading
	};
}

export default connect(mapStateToProps, null)(LoadingSpinner);