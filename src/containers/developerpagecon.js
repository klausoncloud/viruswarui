import { connect } from 'react-redux';
import { setUrlPlayerUrl } from './../actions/actions';
import DeveloperInstructions from './../components/developerpage/developerinstructions';

const mapStateToProps = state => {
	return ({
        urlProgramURL : state.urlPlayerURL,
        urlProgramStatus : state.urlPlayerURLTestResult
	});
}

const mapDispatchToProbs = dispatch => {
	return ({
		onTestButtonClick: url => {
		    dispatch(setUrlPlayerUrl(url));
		}
	});
}

const DeveloperPageCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(DeveloperInstructions);

export default DeveloperPageCon;