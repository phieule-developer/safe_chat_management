import { all } from 'redux-saga/effects';

import authSaga from './auth/saga';
import dashboardSaga from './dashboard/saga';
import groupSaga from './group/saga';
import layoutSaga from './layout/saga.js';
import conversationSaga from './conversation/saga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        layoutSaga(),
        dashboardSaga(),
        groupSaga(),
        conversationSaga()
    ]);
}
