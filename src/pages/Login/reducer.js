import { createActions } from "reduxsauce";
import { produce } from 'immer';

export const { Types: loginTypes, Creators: loginCreators } = createActions({
    requestLogin: ["email", "password"],
    successLogin: ["payload"],
    failureLogin: ["error"],
});

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    user: null,
    error: null,
};


export const loginReducer = (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        case loginTypes.REQUEST_LOGIN:
            draft.isLoading = true;
            draft.error = null;
            break;
        case loginTypes.SUCCESS_LOGIN:
            draft.isLoading = false;
            draft.isLoggedIn = true;
            draft.user = action.payload;
            draft.error = null;
            break;
        case loginTypes.FAILURE_LOGIN:
            draft.isLoading = false;
            draft.isLoggedIn = false;
            draft.user = null;
            draft.error = action.error;
            break;
        default:
            return state;
    }
})