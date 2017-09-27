import fetch from 'isomorphic-fetch'

import Player from './../model/player'
import Move from './../model/move'


class GameServer {

    // let url = 'http://localhost:8080/simpleviruswar/rest/start';
	 // web pack proxy will forward
    static url = '/simpleviruswar/rest/start';

    static _buildPlayersJSONString(players, playerTypes) {
    	/*
    	** Example output
    	 [
	      { 'type' : 'builtin', 'data' : 0, 'id' : 0 },
	      { 'type' : 'builtin', 'data' : 0, 'id' : 1 },
	      { 'type' : 'builtin', 'data' : 0, 'id' : 2 },
	      { 'type' : 'url', 'data' : 4, 'id' : 3 }
	    ]
    	*/
    	let apiPlayers = [];
    	for (let i = 0; i < players.length; i++) {
    		let player = players[i];
    		let playerType = playerTypes[player.getPlayerType()];
    		apiPlayers.push(
    		    {
    		    	'type' : playerType.type, 
    		    	'data' : playerType.data, 
    		    	'id' : player.getId()
    		    }
    		);
    	}
        return JSON.stringify(apiPlayers);
    }

	static getMoves (players, playerTypes) {

      let url = this.url; 	     
	  let payload = { 
	  	method : 'POST',
	  	headers : {
	  		'Content-Type' : 'application/json'
	  	},
	  	body : this._buildPlayersJSONString(players, playerTypes)
	  };
	  
	  return fetch(url, payload).then( response => {
		  	if (response.status >= 400) {
		  		console.log("Error response from server" + response.status);
		  		return "[]";
		  	} else {
		  		return response.json();
		  	}
		  } ).then( function(jsonData) {
		  	    let moves = [];
		  	    for (let i = 0; i < jsonData.length; i++) {
		  	    	let rawMove = jsonData[i];
                    moves.push(
                    	new Move(rawMove.player, rawMove.impact, rawMove.posH, rawMove.posW)
                    );
		  	    }

		  	    return moves;
		      });
	}

	static testGetMoves() {

	    let moves = this.getMoves(Player.defaultPlayers(), Player.defaultPlayerTypes());
	    return moves;
	}
}



export default GameServer;