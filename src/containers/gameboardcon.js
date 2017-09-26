import { connect } from 'react-redux';
import { setPlayerStatus, setMoves, gameOver } from './../actions/actions';
import GameBoard from './../components/gamepage/gameboard';

const mapStateToProps = (state) => {
	return ({
        players : state.players,
        playerTypes : state.playerTypes,
        moves : state.moves,

        externalPLayer : state.externalPLayer,
	    externalPlayerURL : state.externalPlayerURL,
	    externalPlayerURLTestResult : state.externalPlayerURLTestResult,

	    gameViz : state.gameViz
	});
}

const mapDispatchToProbs = (dispatch) => {
	return ({
		setPlayerStatus: (id, status) => {
		    dispatch(setPlayerStatus(id, status));
		},

		setMovesToPlay: (moves) => {
			dispatch(setMoves(moves));
		},

		setGameOver: () => {
			dispatch(gameOver());
		}
	});
}

const GameBoardCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(GameBoard);

export default GameBoardCon;