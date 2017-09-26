import { connect } from 'react-redux';
import { setExternalPlayerTestURL, setExternalPlayer } from './../actions/actions';
import ExternalProgram from './../components/developerpage/externalprogram';

const mapStateToProps = (state) => {
	return ({
        externalProgramURL : state.externalPlayerURL,
        externalProgramStatus : state.externalPlayerURLTestResult
	});
}

const mapDispatchToProbs = (dispatch) => {
	return ({
		onTestButtonClick: url => {
		    dispatch(setExternalPlayerTestURL(url));
		},
		onAddButtonClick: url => {
		    dispatch(setExternalPlayer(url));
		}
	});
}

const ExternalPlayerCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(ExternalProgram);

export default ExternalPlayerCon;