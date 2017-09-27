import { connect } from 'react-redux';
import TheGame from './../components/gamepage/thegame';

const mapStateToProps = (state) => {
	return ({
        players : state.players,
        playerTypes : state.playerTypes,
        moves : state.moves,
        messages : state.messages
	});
}

const TheGameCon = connect (
  mapStateToProps,
)(TheGame);

export default TheGameCon;