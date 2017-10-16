import fetch from 'isomorphic-fetch'

import Move from './../model/move'
import * as STATUS from './../model/externalprogramstatus'


class GameServer {

    static urlBase = '/simpleviruswar/rest';
    static urlStart = GameServer.urlBase + '/start';
    static urlTestPlayer = GameServer.urlBase + '/testPlayer';

    static _buildPlayersJSONString(players, playerTypes) {
    	/*
    	** Example output
    	 [
	      { 'type' : 'builtin', 'data' : 0, 'id' : 0 },
	      { 'type' : 'builtin', 'data' : 0, 'id' : 1 },
	      { 'type' : 'builtin', 'data' : 0, 'id' : 2 },
	      { 'type' : 'url', 'data' : 'http:/...', 'id' : 3 }
	      { 'type' : 'code', 'data' : 'import ...', 'id' : 3 }
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

      let url = this.urlStart; 	     
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

	static _testPlayer (type, data) {

      let url = this.urlTestPlayer;
      let bodyObject = { 
      	'type': type,
      	'data': data,
      	'id' : 0 }; 	     
	  let payload = { 
	  	method : 'POST',
	  	headers : {
	  		'Content-Type' : 'application/json'
	  	},
	  	body : JSON.stringify(bodyObject)
	  };
	  
	  return fetch(url, payload).then( response => {
		  	if (response.status >= 400) {
		  		console.log("Error response from server" + response.status);
		  		return "[]";
		  	} else {
		  		return response.json();
		  	}
		  } ).then( function(jsonData) {
		  	    let result = jsonData;
                // Allows interception for tests
		  	    return result;
		      });
	}

	static testUrlPlayer (playerUrl) {
		return this._testPlayer('url', playerUrl);
	}

	static testCodePlayer (code) {
		return this._testPlayer('code', code);
	}

    // For test purposes only.
    static testPlayerTest (playerUrl) {
	  return new Promise(
	  	(resolve, reject) => {
	  		let result = { 
	  			status: STATUS.URL_PROGRAM_TEST_OK, 
	  			message: "Perfect." 
	  		};

	  		resolve(result);
	  	});
	}
}

export default GameServer;