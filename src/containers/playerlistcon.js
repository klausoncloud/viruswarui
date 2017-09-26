import { connect } from 'react-redux';
import { setExternalPlayerTestURL } from './../actions/actions';
import ExternalProgram from './../components/gamepage/playerlist';

const mapStateToProps = (state) => {
	console.log("mapping redux")
	console.log(state);
	return ({
        externalProgramURL : state.externalPlayerURL,
        externalProgramStatus : state.externalPlayerURLTestResult
	});
}

const mapDispatchToProbs = (dispatch) => {
	return ({
		onTestButtonClick: url => {
		    dispatch(setExternalPlayerTestURL(url));
		}
	});
}

const PlayerListCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(PlayerList);

export default PlayerListCon;