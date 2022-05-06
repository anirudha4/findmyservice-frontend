import { createActions } from "reduxsauce";
import { produce } from 'immer';

export const { Types: signupTypes, Creators: signupCreators } = createActions({
    requestSignup: ["payload"],
    successSignup: ['payload'],
    failureSignup: ["error"],
});

const initialState = {
    isLoading: false,
    error: null,
    user: null,
    isLoggedIn: false
};

export const signupReducer = (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        case signupTypes.REQUEST_SIGNUP:
            draft.isLoading = true;
            draft.error = null;
            break;
        case signupTypes.SUCCESS_SIGNUP:
            draft.isLoading = false;
            draft.error = null;
            draft.user = action.payload.user;
            draft.isLoggedIn = true;
            break;
        case signupTypes.FAILURE_SIGNUP:
            draft.isLoading = false;
            draft.error = action.error;
            draft.user = null;
            draft.isLoggedIn = false;
            break;
        default:
            return state;
    }
});
