import { all } from 'redux-saga/effects'


const sagaRegistry = [
]

export function* coreSaga() {
    yield all(sagaRegistry)
}