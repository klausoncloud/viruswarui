import * as ACTION_TYPE from './actiontypes';
import * as EP_STATUS from './../model/externalprogramstatus';

import GameServer from './gameserver';

export const setPlayerType = (playerId, typeId) => {
  return {
	type: ACTION_TYPE.SET_PLAYER_TYPE,
	playerId : playerId,
	typeId : typeId
  }
}

export const startGame = (moves) => {
  return {
    type : ACTION_TYPE.START_GAME,
    moves : moves
  }
}

export const testStartGame = () => {
  return {
    type : ACTION_TYPE.TEST_START_GAME,
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

export const setExternalPlayerTestURL = (url, passed, message) => {
  let status;

  if (passed) {
    status = EP_STATUS.EXTERNALPROGRAM_TEST_OK;
  } else {
    status = EP_STATUS.EXTERNALPROGRAM_TEST_FAILURE;
  }

  return {
    type : ACTION_TYPE.SET_EXTERNAL_PLAYER_TESTURL,
    externalPlayerURL : url,
    externalPlayerStatus : status,
    externalPlayerMessage : message
  }
}

export const clearMessages = () => {
  return {
    type : ACTION_TYPE.CLEAR_MESSAGES
  }
}

export const clearExternalPlayerTestResult = () => {
  return {
    type : ACTION_TYPE.CLEAR_EXTERNAL_PLAYER_TESTRESULT
  }
}

export const storeCanvas = (image) => {
  return {
    type : ACTION_TYPE.STORE_CANVAS,
    image : image
  }
}

export function requestGameStart(players, playerTypes) {
  return function (dispatch) {
    return GameServer.getMoves(players, playerTypes).then( moves => {
      dispatch(startGame(moves))
    }).catch(error => { 
      throw(error);
    });
  }
}

export function requestTestExternalPlayer(url) {
  return function (dispatch) {
    return GameServer.testPlayer(url).then( (result) => {
      dispatch(setExternalPlayerTestURL(url, result.passed, result.message))
    }).catch(error => { 
      throw(error);
    });
  }
}
