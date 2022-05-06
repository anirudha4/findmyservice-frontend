import { appSaga } from '@pages/Auth/saga'
import { all } from 'redux-saga/effects'


const sagaRegistry = [
    appSaga()
]

export function* coreSaga() {
    yield all(sagaRegistry)
}