import * as ACTION_TYPE from './actiontypes';
import * as EP_STATUS from './../model/externalprogramstatus';

import GameServer from './gameserver';
import FileServer from './fileserver';

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

export const setUrlPlayer = urlPlayerURL => {
  return {
    type : ACTION_TYPE.SET_URL_PLAYER,
    // Todo: Convert URL into an external player!
    urlPlayerURL : urlPlayerURL
  }
}

export const setUrlPlayerUrl = (url, passed, message) => {
  let status;

  if (passed) {
    status = EP_STATUS.URL_PROGRAM_TEST_OK;
  } else {
    status = EP_STATUS.URL_PROGRAM_TEST_FAILURE;
  }

  return {
    type : ACTION_TYPE.SET_URL_PLAYER_URL,
    urlPlayerURL : url,
    urlPlayerStatus : status,
    urlPlayerMessage : message
  }
}

export const setCodePlayer = codePlayerCode => {
  return {
    type : ACTION_TYPE.SET_CODE_PLAYER,
    // Todo: Convert URL into an external player!
    codePlayerCode : codePlayerCode
  }
}

export const setCodePlayerCode = (code, passed, message) => {
  let status;

  if (passed) {
    status = EP_STATUS.CODE_PROGRAM_TEST_OK;
  } else {
    status = EP_STATUS.CODE_PROGRAM_TEST_FAILURE;
  }

  return {
    type : ACTION_TYPE.SET_CODE_PLAYER_CODE,
    codePlayerCode : code,
    codePlayerStatus : status,
    codePlayerMessage : message
  }
}

export const storeCodeEditorCode = (code) => {
  return {
    type: ACTION_TYPE.STORE_CODE_EDITOR_CODE,
    codeEditorCode : code
  }
}

export const clearMessages = () => {
  return {
    type : ACTION_TYPE.CLEAR_MESSAGES
  }
}

export const clearUrlPlayerTestResult = () => {
  return {
    type : ACTION_TYPE.CLEAR_URL_PLAYER_TESTRESULT
  }
}

export const clearCodePlayerTestResult = () => {
  return {
    type : ACTION_TYPE.CLEAR_CODE_PLAYER_TESTRESULT
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

export function requestTestUrlPlayer(url) {
  return function (dispatch) {
    return GameServer.testUrlPlayer(url).then( (result) => {
      dispatch(setUrlPlayerUrl(url, result.passed, result.message))
    }).catch(error => { 
      throw(error);
    });
  }
}

export function requestTestCodePlayer(code) {
  return function (dispatch) {
    return GameServer.testCodePlayer(code).then( (result) => {
      dispatch(setCodePlayerCode(code, result.passed, result.message))
    }).catch(error => { 
      throw(error);
    });
  }
}

export function loadCodePlayerCodeExample() {
  return function(dispatch) {
    return FileServer.fetchCodeExample().then( (code) => {
      dispatch(storeCodeEditorCode(code))
    }).catch(error => {
      throw(error);
    });
  }
}
