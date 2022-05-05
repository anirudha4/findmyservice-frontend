const { default: produce } = require("immer");
const { createActions } = require("reduxsauce");

const { Types: loginTypes, Creators: loginCreators } = createActions({
    requestLogin: ["email", "password"],
    successLogin: ["user"],
    failureLogin: ["error"],
});

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    user: null,
    error: null,
};
