import statisticApi from "../../apis/statistic";
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { DashboardActionTypes } from "./constants";
import { dashboardApiResponseError, dashboardApiResponseSuccess } from "./actions";
function* statisticTotalMember() {
    try {

        let response = yield statisticApi.totalMember();
        yield put(dashboardApiResponseSuccess(DashboardActionTypes.STATISTIC_TOTAL_MEMBER, response.data.amount));
    } catch (error) {
        yield put(dashboardApiResponseError(DashboardActionTypes.STATISTIC_TOTAL_MEMBER, error.message));
    }
}
function* getLastOnlineList() {
    try {

        let response = yield statisticApi.getLastOnlineList();
        yield put(dashboardApiResponseSuccess(DashboardActionTypes.GET_LAST_ONLINE_LIST, response.data));
    } catch (error) {
        yield put(dashboardApiResponseError(DashboardActionTypes.GET_LAST_ONLINE_LIST, error.message));
    }
}
function* listen() {
    yield takeEvery(DashboardActionTypes.STATISTIC_TOTAL_MEMBER, statisticTotalMember);
    yield takeEvery(DashboardActionTypes.GET_LAST_ONLINE_LIST, getLastOnlineList);
}

function* dashboardSaga() {
    yield all([
        fork(listen)
    ]);
}

export default dashboardSaga;