import { signupService } from "@services/register";
import { takeLatest, call, put } from "redux-saga/effects";
import { signupCreators, signupTypes } from "./reducer";
import { showNotification } from '@mantine/notifications';

// sagas
export function* requestSignup({ payload }) {
    try {
        const { data } = yield call(signupService, payload);
        console.log({ data });
        yield put(signupCreators.successSignup(data));
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
        yield put(signupCreators.failureSignup(error.response.data));
    }
}

// login watcher
export function* signupSaga() {
    yield takeLatest(signupTypes.REQUEST_SIGNUP, requestSignup);
}