import * as ACTION_TYPE from './actiontypes';

import GameServer from './gameserver';

export const setPlayerType = (playerId, typeId) => {
  return {
	type: ACTION_TYPE.SET_PLAYER_TYPE,
	playerId : playerId,
	typeId : typeId
  }
}

export const setMoves = moves => {
  return {
    type : ACTION_TYPE.SET_MOVES,
    moves : moves
  }
}

export const startGame = () => {
  return {
    type : ACTION_TYPE.START_GAME,
  }
}

export const gameOver = () => {
  return {
    type : ACTION_TYPE.GAME_OVER,
  }
}

export const setPlayerStatus = (playerId, status) => {
  return {
    type : ACTION_TYPE.SET_PLAYER_STATUS,
    playerId : playerId,
    status : status
  }
}

export const setExternalPlayer = externalPlayerURL => {
  return {
    type : ACTION_TYPE.SET_EXTERNAL_PLAYER,
    // Todo: Convert URL into an external player!
    externalPlayerURL : externalPlayerURL
  }
}

export const setExternalPlayerTestURL = url => {
  return {
    type : ACTION_TYPE.SET_EXTERNAL_PLAYER_TESTURL,
    externalPlayerURL : url
  }
}

export const setExternalPlayerURLTestResult = result => {
  return {
    type : ACTION_TYPE.SET_EXTERNAL_PLAYER_URL_TEST_RESULT,
    result : result
  }
}

export const clearMessages = () => {
  return {
    type : ACTION_TYPE.CLEAR_MESSAGES
  }
}

export const storeCanvas = (image) => {
  return {
    type : ACTION_TYPE.STORE_CANVAS,
    image : image
  }
}

export function loadMoves(players, playerTypes) {
  return function (dispatch) {
    return GameServer.getMoves(players, playerTypes).then(moves => {
      dispatch(setMoves(moves))
    }).catch(error => { 
      throw(error);
    });
  }
}
