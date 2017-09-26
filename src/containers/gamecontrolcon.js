import { connect } from 'react-redux';
import { startGame } from './../actions/actions';
import GameControl from './../components/gamepage/gamecontrol';

const mapStateToProps = (state) => {
	return ({
        gameViz : state.gameViz
	});
}

const mapDispatchToProbs = (dispatch) => {
	return ({
		startButtonHandler: () => {
		    dispatch(startGame());
		}
	});
}

const GameControlCon = connect (
  mapStateToProps,
  mapDispatchToProbs
)(GameControl);

export default GameControlCon;