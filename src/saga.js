import { loginSaga } from '@pages/Login/saga'
import { signupSaga } from '@pages/Signup/saga'
import { all } from 'redux-saga/effects'


const sagaRegistry = [
    signupSaga(),
]

export function* coreSaga() {
    yield all(sagaRegistry)
}