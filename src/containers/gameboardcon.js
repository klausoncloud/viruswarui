import { connect } from 'react-redux';
import { setPlayerStatus, gameOver, storeCanvas } from './../actions/actions';
import GameBoard from './../components/gamepage/gameboard';

const mapStateToProps = (state) => {
	return ({
        players : state.players,
        playerTypes : state.playerTypes,
        moves : state.moves,

        externalPLayer : state.externalPLayer,
	    externalPlayerURL : state.externalPlayerURL,
	    externalPlayerURLTestResult : state.externalPlayerURLTestResult,

	    gameViz : state.gameViz,
	    storedCanvas : state.storedCanvas
	});
}

const mapDispatchToProbs = (dispatch) => {
	return ({
		setPlayerStatus: (id, status) => {
		    dispatch(setPlayerStatus(id, status));
		},

		setGameOver: () => {
			dispatch(gameOver());
		},

		storeCanvas: (image) => {
			dispatch(storeCanvas(image));
		}
	});
}

const GameBoardCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(GameBoard);

export default GameBoardCon;