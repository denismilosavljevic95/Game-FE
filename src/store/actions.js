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

export const resetBattle = (id, url) => {
  return {
    type: actionTypes.RESET_BATTLE,
    id,
    url
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

export const newBattle = (name, url) => {
  return {
    type: actionTypes.NEW_BATTLE,
    name,
    url
  }
}
  
export const newBattleSuccess = data => {
  return {
    type: actionTypes.NEW_BATTLE_SUCCESS,
    data
  }
}
  
export const newBattleFail = error => {
  return {
    type: actionTypes.NEW_BATTLE_FAIL,
    error
  }
}

export const newAttack = (id, url) => {
  return {
    type: actionTypes.NEW_ATTACK,
    id,
    url
  }
}
  
export const newAttackSuccess = data => {
  return {
    type: actionTypes.NEW_ATTACK_SUCCESS,
    data
  }
}
  
export const newAttackFail = error => {
  return {
    type: actionTypes.NEW_ATTACK_FAIL,
    error
  }
}