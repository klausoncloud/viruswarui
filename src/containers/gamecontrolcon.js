import { connect } from 'react-redux';
import { startGame, loadMoves } from './../actions/actions';
import GameControl from './../components/gamepage/gamecontrol';

const mapStateToProps = (state) => {
	return ({
        players : state.players,
        playerTypes : state.playerTypes
	});
}

const mapDispatchToProbs = (dispatch) => {
	return ({
		startButtonHandler: (players, playerTypes) => {
		    //dispatch(startGame());
		    dispatch(loadMoves(players, playerTypes));
		}
	});
}

const GameControlCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(GameControl);

export default GameControlCon;