import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actionTypes";
import { fetchBattlesSaga, fetchLogsSaga, resetBattleSaga } from "./battle";

export function* watchBattles() {
    yield takeEvery(actionTypes.FETCH_MY_BATTLES, fetchBattlesSaga)
    yield takeEvery(actionTypes.FETCH_LOGS, fetchLogsSaga)
    yield takeEvery(actionTypes.RESET_BATTLE, resetBattleSaga)
}