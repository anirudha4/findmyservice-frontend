import { createActions } from "reduxsauce";
import { produce } from 'immer';

export const { Types: authTypes, Creators: authCreators } = createActions({
    requestSignup: ["payload"],
    successSignup: ['payload'],
    failureSignup: ["error"],
    requestLogin: ["payload"],
    successLogin: ["payload"],
    failureLogin: ["error"],
    requestFetchUser: ['payload'],
    successFetchUser: ['payload'],
    failureFetchUser: ["error"],
});

const initialState = {
    isLoading: false,
    error: null,
    user: null,
    isLoggedIn: false,
    appLoading: false,
    token: null,
};

export const authReducer = (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        case authTypes.REQUEST_SIGNUP:
            draft.isLoading = true;
            draft.error = null;
            break;
        case authTypes.SUCCESS_SIGNUP:
            draft.isLoading = false;
            draft.error = null;
            draft.user = action.payload.user;
            draft.isLoggedIn = true;
            draft.token = action.payload.token;
            break;
        case authTypes.FAILURE_SIGNUP:
            draft.isLoading = false;
            draft.error = action.error;
            draft.user = null;
            draft.isLoggedIn = false;
            break;
        case authTypes.REQUEST_LOGIN:
            draft.isLoading = true;
            draft.error = null;
            draft.token = null;
            break;
        case authTypes.SUCCESS_LOGIN:
            draft.isLoading = false;
            draft.error = null;
            draft.user = action.payload.user;
            draft.isLoggedIn = true;
            draft.token = action.payload.token;
            break;
        case authTypes.FAILURE_LOGIN:
            draft.isLoading = false;
            draft.error = action.error;
            draft.user = null;
            draft.isLoggedIn = false;
            draft.token = null;
            break;
        case authTypes.REQUEST_FETCH_USER:
            draft.appLoading = true;
            draft.error = null;
            break;
        case authTypes.SUCCESS_FETCH_USER:
            draft.appLoading = false;
            draft.error = null;
            draft.user = action.payload.user;
            draft.isLoggedIn = true;
            draft.token = action.payload.token;
            break;
        case authTypes.FAILURE_FETCH_USER:
            draft.appLoading = false;
            draft.error = action.error;
            draft.user = null;
            draft.isLoggedIn = false;
            draft.token = null;
            break;
        default:
            return state;
    }
});
