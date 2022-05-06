import { combineReducers, createStore, applyMiddleware } from "redux";
import { createActions } from 'reduxsauce';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { coreSaga } from "@saga";
import { authReducer } from "@pages/Auth/reducer";


// redux-persist config
const persistConfig = {
    key: 'root',
    storage,
}


const combinedReducers = combineReducers({
    authReducer: authReducer,
});

export const { Types: appTypes, Creators: appCreators } = createActions({
    logout: []
});
const rootReducer = (state, action) => {
    if (action.type === appTypes.LOGOUT) {
        state = undefined;
    }
    return combinedReducers(state, action);
}

// saga setup
const sagaMiddleware = createSagaMiddleware()

// persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// create store
export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(coreSaga)
export const persistor = persistStore(store);
