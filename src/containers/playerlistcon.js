import { connect } from 'react-redux';
import { setPlayerType } from './../actions/actions';
import PlayerList from './../components/gamepage/playerlist';

const mapStateToProps = (state) => {
	return ({
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