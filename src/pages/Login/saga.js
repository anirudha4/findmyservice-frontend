import { takeLatest } from "redux-saga/effects";
import { loginTypes } from "./reducer";

// sagas
export function* requestLogin(action) {
    try {
        console.log(action);
        // do something
    } catch (error) {
        // do something
    }
}

// login watcher
export function* loginSaga() {
    takeLatest(loginTypes.REQUEST_LOGIN, requestLogin)
}