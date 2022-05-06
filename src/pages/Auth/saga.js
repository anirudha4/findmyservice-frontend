import { takeLatest, call, put } from "redux-saga/effects";
import { showNotification } from '@mantine/notifications';
import { authCreators, authTypes } from "./reducer";
import { loginService, signupService, verifyUserService } from "@services/auth";

// sagas
export function* requestSignup({ payload }) {
    try {
        const { data } = yield call(signupService, payload);
        yield put(authCreators.successSignup(data));
        showNotification({
            title: 'Success',
            message: data.message,
        })
        // do something
    } catch (error) {
        const { message } = error?.response?.data || {};
        showNotification({
            title: 'Error',
            message: message || 'Something went wrong',
            color: 'red'
        })
        yield put(authCreators.failureSignup(message));
    }
}

export function* requestLogin({ payload }) {
    try {
        const { data } = yield call(loginService, payload);
        yield put(authCreators.successLogin(data));
        showNotification({
            title: 'Success',
            message: data.message,
        })
        // do something
    } catch (error) {
        const { message } = error?.response?.data || {};
        showNotification({
            title: 'Error',
            message: message || 'Something went wrong',
            color: 'red'
        })
        yield put(authCreators.failureLogin(message));
    }
}
export function* requestFetchUser({ payload }) {
    try {
        const { data } = yield call(verifyUserService, payload);
        yield put(authCreators.successFetchUser(data));
    } catch (error) {
        const { message } = error?.response?.data || { message: 'Something went wrong' };
        yield put(authCreators.failureFetchUser(message));
    }
}

// login watcher
export function* appSaga() {
    yield takeLatest(authTypes.REQUEST_SIGNUP, requestSignup);
    yield takeLatest(authTypes.REQUEST_LOGIN, requestLogin);
    yield takeLatest(authTypes.REQUEST_FETCH_USER, requestFetchUser);
}