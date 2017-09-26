import * as ACTION_TYPE from './actiontypes'

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

export const setExternalPlayer = externalPlayer => {
  return {
    type : ACTION_TYPE.SET_EXTERNAL_PLAYER,
    // Todo: Convert URL into an external player!
    externalPlayer : externalPlayer
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

export const addMessage = message => {
  return {
    type : ACTION_TYPE.ADD_MESSAGE,
    message : message
  }
}

export const clearMessages = () => {
  return {
    type : ACTION_TYPE.CLEAR_MESSAGES
  }
}