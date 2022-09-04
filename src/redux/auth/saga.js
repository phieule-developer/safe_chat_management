import { all, fork, put, takeEvery } from 'redux-saga/effects';
//api core
import authApi from '../../apis/auth';
// actions
import { authApiResponseSuccess, authApiResponseError } from './actions';

import { clearLocalStorage, writeLocalStorage } from '../../helpers/localStorage';
// constants
import { AuthActionTypes } from './constants';
import { ACCESS_TOKEN } from '../../constants';

function* login({ payload }) {
    try {

        let response = yield authApi.login(payload.email, payload.password);

        writeLocalStorage(ACCESS_TOKEN, response.data.access_token);
        yield put(authApiResponseSuccess(AuthActionTypes.LOGIN_USER, response));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.LOGIN_USER, error.message));
    }
}
function* checkSession() {
    try {

        let response = yield authApi.checkSession();

        if (response.data) {
            yield put(authApiResponseSuccess(AuthActionTypes.CHECK_SESSION, response));
        } else {
            yield put(authApiResponseError(AuthActionTypes.CHECK_SESSION, "Hết phiên đăng nhập"));
        }
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.CHECK_SESSION, error.message));
    }
}
function* logout() {
    try {
        clearLocalStorage(ACCESS_TOKEN);
        yield put(authApiResponseSuccess(AuthActionTypes.LOGOUT_USER, {}));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.LOGOUT_USER, "Có lỗi xảy ra"));
    }
}

function* signup({ payload: { fullname, email, password } }) {
    try {
        // const response = yield call(signupApi, { fullname, email, password });
        // yield put(authApiResponseSuccess(AuthActionTypes.SIGNUP_USER, user));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.SIGNUP_USER, error.message));
    }
}

function* forgotPassword({ payload: { email } }) {
    try {
        // const response = yield call(forgotPasswordApi, { email });
        // yield put(authApiResponseSuccess(AuthActionTypes.FORGOT_PASSWORD, response.data));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.FORGOT_PASSWORD, error.message));
    }
}
function* listen() {
    yield takeEvery(AuthActionTypes.LOGIN_USER, login);
    yield takeEvery(AuthActionTypes.CHECK_SESSION, checkSession);
    yield takeEvery(AuthActionTypes.LOGOUT_USER, logout);
    yield takeEvery(AuthActionTypes.SIGNUP_USER, signup);
    yield takeEvery(AuthActionTypes.FORGOT_PASSWORD, forgotPassword);
}

function* authSaga() {
    yield all([
        fork(listen)
    ]);
}

export default authSaga;
