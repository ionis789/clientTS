export const LOAD_USER_DATA = "LOAD_USER_DATA";
export const REG_RESPONSE = "REG_RESPONSE";
export const LOG_RESPONSE = "LOG_RESPONSE";
export const RESET_AUTH_RESPONSE = "RESET_AUTH_RESPONSE";
export const LOG_OUT = "LOG_OUT";
let initialState = {
    isAuthorized: null,
    loggedUserID: null,
    loggedUserName: null,
    loggedUserMail: null,
    regResponse: null,
    logResponse: null,
};
