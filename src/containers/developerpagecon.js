import { connect } from 'react-redux';
import { setExternalPlayerTestURL } from './../actions/actions';
import DeveloperInstructions from './../components/developerpage/developerinstructions';

const mapStateToProps = state => {
	console.log("mapping redux")
	console.log(state);
	return ({
        externalProgramURL : state.externalPlayerURL,
        externalProgramStatus : state.externalPlayerURLTestResult
	});
}

const mapDispatchToProbs = dispatch => {
	return ({
		onTestButtonClick: url => {
		    dispatch(setExternalPlayerTestURL(url));
		}
	});
}

const DeveloperPageCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(DeveloperInstructions);

export default DeveloperPageCon;