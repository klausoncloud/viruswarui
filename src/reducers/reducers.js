import Player from './../model/player'
import Move from './../model/move'
import * as ACTION_TYPE from './../actions/actiontypes'

const initialState = {

		players : Player.defaultPlayers(),
	    playerTypes : Player.defaultPlayerTypes(),

	    externalPlayerURL : "",
	    externalPlayerURLTestResult : undefined,

	    moves : [],

        gameViz : 'IDLE',
        storedCanvas : null,

        messages : ""
}

const setOnePlayerStatus = (players, id, status) => {
    let result = [];
    for (let i = 0; i < players.length; i++) {
        if (i === id) {
            let player = players[i].clone();
            player.setStatus(status);
            result.push(player);
        } else {
            result.push(players[i]);
        }
    }
    return result;
}

const setOnePlayerType = (players, playerId, typeId) => {
    let result = [];
    for (let i = 0; i < players.length; i++) {
        if (i === playerId) {
            let player = players[i].clone();
            player.setPlayerType(typeId);
            result.push(player);
        } else {
            result.push(players[i]);
        }
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
                messages += "Program " + (action.playerId + 1) + " is a winner.\n";
            } else if (action.status === Player.LOST) {
                messages += "Program " + (action.playerId + 1) + " lost.\n";
            }

            return (
                Object.assign({}, state, 
                    {
                        players : players,
                        messages : messages
                    })
            );

        case ACTION_TYPE.SET_PLAYER_TYPE:
            players = setOnePlayerType(state.players, action.playerId, action.typeId);
            return (
                Object.assign({}, state, 
                    {
                        players : players
                    })
            );

        // Todo: This is a game start. Collapse the two.
        case ACTION_TYPE.SET_MOVES:
            return (
          	    Object.assign({}, state, 
                    { 
                        moves : action.moves,
                        gameViz : 'RUNNING',
                        // This is dirty!
                        players : setPlayersAlive(state.players),
                        messages : "Starting a game.\n"
                    })
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

        // This may not be needed.
        case ACTION_TYPE.CLEAR_MESSAGES:
            return (
                Object.assign({}, state, 
                    { 
                        messages : ""
                    })
            );

        case ACTION_TYPE.SET_EXTERNAL_PLAYER:
            let playerTypes = state.playerTypes.slice(0);
            let newPlayerType = 
                { type : 'url', 
                  data : Player.externalPlayerTypeIdx.toString(), 
                  description : action.externalPlayerURL };
            if (playerTypes.length > Player.externalPlayerTypeIdx) {
                playerTypes[Player.externalPlayerTypeIdx] = newPlayerType;
            } else {
                playerTypes.push(newPlayerType);
            }
            return (
                Object.assign({}, state, 
                    { 
                        playerTypes : playerTypes,
                        externalPlayerURL : action.externalPlayerURL
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

        case ACTION_TYPE.STORE_CANVAS:
            return (
                Object.assign({}, state, { storedCanvas : action.image })
            );

        default:
            return state;
	}
}

export default viruswarUIAppReducer;