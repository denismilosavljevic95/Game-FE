import * as actionTypes from './actionTypes';

export const fetchBattles = _ => {
  return {
    type: actionTypes.FETCH_MY_BATTLES
  }
}
  
export const fetchBattlesSuccess = data => {
  return {
    type: actionTypes.FETCH_MY_BATTLES_SUCCESS,
    data
  }
}
  
export const fetchBattlesFail = error => {
  return {
    type: actionTypes.FETCH_MY_BATTLES_FAIL,
    error
  }
}

export const fetchLogs = id => {
  return {
    type: actionTypes.FETCH_LOGS,
    id
  }
}
  
export const fetchLogsSuccess = data => {
  return {
    type: actionTypes.FETCH_LOGS_SUCCESS,
    data
  }
}
  
export const fetchLogsFail = error => {
  return {
    type: actionTypes.FETCH_LOGS_FAIL,
    error
  }
}

export const resetBattle = id => {
  return {
    type: actionTypes.RESET_BATTLE,
    id
  }
}
  
export const resetBattleSuccess = data => {
  return {
    type: actionTypes.RESET_BATTLE_SUCCESS,
    data
  }
}
  
export const resetBattleFail = error => {
  return {
    type: actionTypes.RESET_BATTLE_FAIL,
    error
  }
}