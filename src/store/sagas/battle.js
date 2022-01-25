import axios from 'axios';

import { put } from 'redux-saga/effects';
import * as actions from '../actions';

export function* fetchBattlesSaga(action) {
  try {
    let response;
    response = yield axios.get('http://localhost:4001/battles')
    yield put(actions.fetchBattlesSuccess(response.data));
  } catch (error) {
    console.log('error', error);
    yield put(actions.fetchBattlesFail(error))
  }
}

export function* fetchLogsSaga(action) {
  try {
    let response;
    response = yield axios.get('http://localhost:4001/battle/log?id=' + action.id)
    yield put(actions.fetchLogsSuccess(response.data));
  } catch (error) {
    console.log('error', error);
    yield put(actions.fetchLogsFail(error))
  }
}

export function* resetBattleSaga(action) {
  try {
    let response;
    response = yield axios.patch('http://localhost:4001/battle/reset?id=', { id: action.id })
    yield put(actions.resetBattleSuccess(response.data));
  } catch (error) {
    console.log('error', error);
    yield put(actions.resetBattleFail(error))
  }
}
