export const LOAD_USER_DATA = "LOAD_USER_DATA" as const;
export const REG_RESPONSE = "REG_RESPONSE" as const;
export const LOG_RESPONSE = "LOG_RESPONSE" as const;
export const RESET_AUTH_RESPONSE = "RESET_AUTH_RESPONSE" as const;
export const LOG_OUT = "LOG_OUT" as const;

type authError = {
  message: string;
  status: number;
};
let initialState = {
  isAuthorized: null as boolean | null,
  loggedUserID: null as number | null,
  loggedUserName: null as string | null,
  loggedUserMail: null as string | null,
  regResponse: null as authError | null,
  logResponse: null as authError | null,
};
export type initialStateType = typeof initialState;
