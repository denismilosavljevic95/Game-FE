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
    let response = yield axios.patch('http://localhost:4001/battle/reset?id=', { id: action.id })
    yield put(actions.resetBattleSuccess(response.data));
    if (action.url) {
      let res = yield axios.get(action.url)
      console.log(res)
      yield put(actions.fetchBattlesSuccess(res.data));
    }
  } catch (error) {
    console.log('error', error);
    yield put(actions.resetBattleFail(error))
  }
}

export function* newBattleSaga(action) {
  try {
    console.log(action.name)
    let response = yield axios.post('http://localhost:4001/battle', { name: action.name })
    yield put(actions.newBattleSuccess(response.data));
    if (action.url) {
      let res = yield axios.get(action.url)
      console.log(res)
      yield put(actions.fetchBattlesSuccess(res.data));
    }
  } catch (error) {
    console.log('error', error);
    yield put(actions.newBattleFail(error))
  }
}

export function* newAttackSaga(action) {
  try {
    console.log(action.name)
    let response = yield axios.post('http://localhost:4001/battle/start', { id: action.id })
    yield put(actions.newAttackSuccess(response.data));
    if (action.url) {
      let res = yield axios.get(action.url)
      console.log(res)
      yield put(actions.fetchBattlesSuccess(res.data));
    }
  } catch (error) {
    console.log('error', error);
    yield put(actions.newAttackFail(error))
  }
}