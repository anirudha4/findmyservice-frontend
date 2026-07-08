import { takeLatest, call, put } from "redux-saga/effects";
import { showNotification } from '@mantine/notifications';
import { authCreators, authTypes } from "./reducer";
import { loginService, signupService, verifyUserService } from "@services/auth";

// sagas
export function* requestSignup({ payload }) {
    try {
        const { data } = yield call(signupService, payload);
        yield put(authCreators.successSignup(data));
        pendo.identify({
            visitor: {
                id: data.user.email,
                email: data.user.email,
                full_name: data.user.name,
                verified: data.user.verified
            }
        });
        showNotification({
            title: 'Success',
            message: data.message,
        })
        if (typeof pendo !== 'undefined') {
            pendo.track("signup_completed", {
                user_name: data.user?.name,
                email_domain: payload.email?.split('@')[1],
                signup_method: "email",
                is_verified: data.user?.verified
            });
        }
    } catch (error) {
        const { message } = error?.response?.data || {};
        showNotification({
            title: 'Error',
            message: message || 'Something went wrong',
            color: 'red'
        })
        if (typeof pendo !== 'undefined') {
            pendo.track("signup_failed", {
                error_message: message || 'Something went wrong',
                email_domain: payload.email?.split('@')[1]
            });
        }
        yield put(authCreators.failureSignup(message));
    }
}

export function* requestLogin({ payload }) {
    try {
        const { data } = yield call(loginService, payload);
        yield put(authCreators.successLogin(data));
        pendo.identify({
            visitor: {
                id: data.user.email,
                email: data.user.email,
                full_name: data.user.name,
                verified: data.user.verified
            }
        });
        showNotification({
            title: 'Success',
            message: data.message,
        })
        if (typeof pendo !== 'undefined') {
            pendo.track("login_completed", {
                user_name: data.user?.name,
                is_verified: data.user?.verified
            });
        }
    } catch (error) {
        const { message } = error?.response?.data || {};
        showNotification({
            title: 'Error',
            message: message || 'Something went wrong',
            color: 'red'
        })
        if (typeof pendo !== 'undefined') {
            pendo.track("login_failed", {
                error_message: message || 'Something went wrong'
            });
        }
        yield put(authCreators.failureLogin(message));
    }
}
export function* requestFetchUser({ payload }) {
    try {
        const { data } = yield call(verifyUserService, payload);
        yield put(authCreators.successFetchUser(data));
        pendo.identify({
            visitor: {
                id: data.user.email,
                email: data.user.email,
                full_name: data.user.name,
                verified: data.user.verified
            }
        });
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