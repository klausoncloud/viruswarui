import { connect } from 'react-redux';
import { requestTestUrlPlayer, setUrlPlayer, clearUrlPlayerTestResult } from './../actions/actions';
import UrlProgram from './../components/developerpage/urlprogram';

const mapStateToProps = (state) => {
	return ({
        urlProgramURL : state.urlPlayerURL,
        urlProgramStatus : state.urlPlayerStatus,
        urlProgramMessage : state.urlPlayerMessage
	});
}

const mapDispatchToProbs = (dispatch) => {
	return ({
		onTestButtonClick: url => {
		    dispatch(requestTestUrlPlayer(url));
		},
		onAddButtonClick: url => {
		    dispatch(setUrlPlayer(url));
		},
		onClearTestResults: () => {
			dispatch(clearUrlPlayerTestResult());
		}
	});
}

const UrlPlayerCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(UrlProgram);

export default UrlPlayerCon;