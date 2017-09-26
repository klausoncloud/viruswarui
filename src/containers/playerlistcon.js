import { connect } from 'react-redux';
import { setExternalPlayerTestURL, setPlayerType } from './../actions/actions';
import PlayerList from './../components/gamepage/playerlist';

const mapStateToProps = (state) => {
	return ({
        externalProgramURL : state.externalPlayerURL,
        externalProgramStatus : state.externalPlayerURLTestResult,
        players : state.players,
        playerTypes : state.playerTypes
	});
}

const mapDispatchToProbs = (dispatch) => {
	return ({
		setPlayerType: (playerId, typeId) => {
		    dispatch(setPlayerType(playerId, typeId));
		}
	});
}

const PlayerListCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(PlayerList);

export default PlayerListCon;