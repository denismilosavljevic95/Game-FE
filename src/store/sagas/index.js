import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actionTypes";
import {
  fetchBattlesSaga,
  fetchLogsSaga,
  resetBattleSaga,
  newBattleSaga,
  newAttackSaga,
  addArmySaga,
  battleInfoSaga
} from "./battle";

export function* watchBattles() {
  yield takeEvery(actionTypes.FETCH_MY_BATTLES, fetchBattlesSaga);
  yield takeEvery(actionTypes.FETCH_LOGS, fetchLogsSaga);
  yield takeEvery(actionTypes.RESET_BATTLE, resetBattleSaga);
  yield takeEvery(actionTypes.NEW_BATTLE, newBattleSaga);
  yield takeEvery(actionTypes.NEW_ATTACK, newAttackSaga);
  yield takeEvery(actionTypes.ADD_ARMY, addArmySaga);
  yield takeEvery(actionTypes.BATTLE_INFO, battleInfoSaga);
}
