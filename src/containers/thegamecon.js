import { connect } from 'react-redux';
import { setPlayerStatus, setMoves } from './../actions/actions';
import TheGame from './../components/gamepage/thegame';

const mapStateToProps = (state) => {
	return ({
        players : state.players,
        playerTypes : state.playerTypes,
        moves : state.moves,
        messages : state.messages
	});
}

const mapDispatchToProbs = (dispatch) => {
	return ({
		setPlayerStatus: (id, status) => {
		    dispatch(setPlayerStatus(id, status));
		},

		setMovesToPlay: (moves) => {
			dispatch(setMoves(moves));
		}
	});
}

const TheGameCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(TheGame);

export default TheGameCon;