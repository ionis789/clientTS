import { authorization } from "../../API/Authorization.js";
import { LOAD_USER_DATA, REG_RESPONSE, LOG_RESPONSE, RESET_AUTH_RESPONSE, LOG_OUT, } from "../types/authTypes.ts";
const defaultState = {
    isAuthorized: null,
    loggedUserID: null,
    loggedUserName: null,
    loggedUserMail: null,
    regResponse: null,
    logResponse: null,
};
const auth = (state = defaultState, action) => {
    switch (action.type) {
        case RESET_AUTH_RESPONSE: {
            return {
                ...state,
                logResponse: null,
                regResponse: null,
            };
        }
        case REG_RESPONSE: {
            return {
                ...state,
                regResponse: action.response,
            };
        }
        case LOG_RESPONSE: {
            return {
                ...state,
                logResponse: action.response,
            };
        }
        case LOAD_USER_DATA: {
            const loggedUserInfoString = localStorage.getItem("loggedUserInfo");
            const loggedUserInfo = JSON.parse(loggedUserInfoString);
            return {
                ...state,
                isAuthorized: loggedUserInfo ? loggedUserInfo.isAuthorized : false,
                loggedUserID: loggedUserInfo ? loggedUserInfo.loggedUserID : null,
                loggedUserName: loggedUserInfo ? loggedUserInfo.loggedUserName : null,
                loggedUserMail: loggedUserInfo ? loggedUserInfo.loggedUserMail : null,
            };
        }
        case LOG_OUT: {
            localStorage.removeItem("loggedUserInfo");
            return {
                ...state,
                isAuthorized: false,
                loggedUserID: null,
                loggedUserName: null,
                loggedUserMail: null,
            };
        }
        default:
            return state;
    }
};
export const logInSubmitTC = (mail, password) => async (dispatch) => {
    const response = await authorization.logInRequest(mail, password);
    response.status === 200
        ? dispatch(loadUserData())
        : dispatch(logResponse(response));
};
export const regSubmitTC = (mail, name, password) => async (dispatch) => {
    const response = await authorization.regRequest(mail, name, password);
    dispatch(regResponse(response));
};
export const logOut = () => ({ type: LOG_OUT });
export const loadUserData = () => ({
    type: LOAD_USER_DATA,
});
export const regResponse = (response) => ({
    type: REG_RESPONSE,
    response,
});
export const logResponse = (response) => ({
    type: LOG_RESPONSE,
    response,
});
export const resetAuthResponse = () => ({
    type: RESET_AUTH_RESPONSE,
});
export default auth;
