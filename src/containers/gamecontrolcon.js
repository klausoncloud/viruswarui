import { connect } from 'react-redux';
import { requestGameStart } from './../actions/actions';
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
			// To run the UI without a server use:
		    //   dispatch(testStartGame());
		    dispatch(requestGameStart(players, playerTypes));
		}
	});
}

const GameControlCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(GameControl);

export default GameControlCon;