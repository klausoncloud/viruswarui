import { connect } from 'react-redux';
import { requestTestExternalPlayer, setExternalPlayer, clearExternalPlayerTestResult } from './../actions/actions';
import ExternalProgram from './../components/developerpage/externalprogram';

const mapStateToProps = (state) => {
	return ({
        externalProgramURL : state.externalPlayerURL,
        externalProgramStatus : state.externalPlayerStatus,
        externalProgramMessage : state.externalPlayerMessage
	});
}

const mapDispatchToProbs = (dispatch) => {
	return ({
		onTestButtonClick: url => {
		    dispatch(requestTestExternalPlayer(url));
		},
		onAddButtonClick: url => {
		    dispatch(setExternalPlayer(url));
		},
		onClearTestResults: () => {
			dispatch(clearExternalPlayerTestResult());
		}
	});
}

const ExternalPlayerCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(ExternalProgram);

export default ExternalPlayerCon;