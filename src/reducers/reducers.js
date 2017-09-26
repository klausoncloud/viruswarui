import Player from './../model/player'
import Move from './../model/move'
import * as ACTION_TYPE from './../actions/actiontypes'

const initialState = {

		players : Player.defaultPlayers(),
	    playerTypes : Player.defaultPlayerTypes(),

	    externalPLayer : null,
	    externalPlayerURL : "",
	    externalPlayerURLTestResult : undefined,

	    moves : [],

        gameViz : 'IDLE',

        messages : ""
}

const setOnePlayerStatus = (players, id, status) => {
    let result = [];
    for (let i = 0; i < players.length; i++) {
        let player = players[i].clone();
        if (i === id) {
            //result.push( Object.assign({}, players[i], { _status : status } ) );
            player.setStatus(status);
        } else {
            //result.push( Object.assign({}, players[i], { } ) );
        }
        result.push(player);
        
    }
    return result;
}

const setPlayersAlive = (players) => {
    let result = [];
    for (let i = 0; i < players.length; i++) {
        let player = players[i].clone();
        player.setStatus(Player.ALIVE);
        
        result.push(player);
    }
    return result;

}

const viruswarUIAppReducer = ( state = initialState, action ) => {
	switch (action.type) {

        case ACTION_TYPE.SET_PLAYER_STATUS:
            let players = setOnePlayerStatus(state.players, action.playerId, action.status);
            let messages = state.messages;
            if (action.status === Player.WON) {
                messages += "Program " + action.playerId + " is a winner.\n";
            } else if (action.status === Player.LOST) {
                messages += "Program " + action.playerId + " lost.\n";
            }

            return (
                Object.assign({}, state, 
                    {
                        players : players,
                        messages : messages
                    })
            );

        case ACTION_TYPE.SET_MOVES:
            return (
          	    Object.assign({}, state, { moves : action.moves })
            );

        case ACTION_TYPE.START_GAME:
            return (
                Object.assign({}, state, 
                    { 
                        gameViz : 'RUNNING',
                        // This is dirty!
                        players : setPlayersAlive(state.players),
                        moves : Move.sampleGame(),
                        messages : "Starting a game.\n"
                    })
            );

        case ACTION_TYPE.GAME_OVER:
            messages = state.messages;
            messages += "Game over."
            return (
                Object.assign({}, state, 
                    { 
                        gameViz : 'IDLE',
                        // This is dirty!
                        messages : messages 
                    })
            );

        case ACTION_TYPE.ADD_MESSAGE:
            let newMessages = state.messages;
            newMessages += action.message;
            return (
                Object.assign({}, state, 
                    { 
                        messages : newMessages
                    })
            );

        // This may not be needed.
        case ACTION_TYPE.CLEAR_MESSAGES:
            return (
                Object.assign({}, state, 
                    { 
                        messages : ""
                    })
            );

        case ACTION_TYPE.SET_EXTERNAL_PLAYER_TESTURL:
            return (
            	Object.assign({}, state, { externalPlayerURL : action.externalPlayerURL })
            );

        case ACTION_TYPE.SET_EXTERNAL_PLAYER_URL_TEST_RESULT:
            return (
            	Object.assign({}, state, { externalPlayerURLTestResult : action.result })
            );

        default:
            return state;
	}
}

export default viruswarUIAppReducer;