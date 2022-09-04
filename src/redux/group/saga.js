import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { groupActionTypes } from "./constants";
import { groupApiResponseSuccess, groupApiResponseError } from "./actions";
import groupApi from '../../apis/group';
function* getAllGroups() {
    try {

        let response = yield groupApi.getAll();
        yield put(groupApiResponseSuccess(groupActionTypes.GET_ALL_GROUP, response.result.items));
    } catch (error) {
        yield put(groupApiResponseError(groupActionTypes.GET_ALL_GROUP, error.message));
    }
}

function* getDetailPermission(action) {
    try {

        let response = yield groupApi.getDetailPermission(action.payload.group_id);
        yield put(groupApiResponseSuccess(groupActionTypes.GET_DETAIL_PERMISSION, response.result));
    } catch (error) {
        yield put(groupApiResponseError(groupActionTypes.GET_DETAIL_PERMISSION, error.message));
    }
}

function* listen() {
    yield takeEvery(groupActionTypes.GET_ALL_GROUP, getAllGroups);
    yield takeEvery(groupActionTypes.GET_DETAIL_PERMISSION, getDetailPermission);
}

function* groupSaga() {
    yield all([
        fork(listen)
    ]);
}

export default groupSaga;