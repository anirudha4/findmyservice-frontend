import { createActions } from "reduxsauce";
import { produce } from 'immer';

export const { Types: signupTypes, Creators: signupCreators } = createActions({
    requestSignup: ["payload"],
    successSignup: [],
    failureSignup: ["error"],
});

const initialState = {
    isLoading: false,
    error: null,
};


export const signupReducer = (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        case signupTypes.REQUEST_SIGNUP:
            console.log({ action, name: 'reducer' });
            draft.isLoading = true;
            draft.error = null;
            break;
        case signupTypes.SUCCESS_SIGNUP:
            draft.isLoading = false;
            draft.error = null;
            break;
        case signupTypes.FAILURE_SIGNUP:
            draft.isLoading = false;
            draft.error = action.error;
            break;
        default:
            return state;
    }
});
