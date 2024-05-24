import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import S from "./S.module.css";
import SignUp from "./SignUp/SignUp.js";
import SignIn from "./SignIn/SignIn.js";
const WelcomePage = ({ ...props }) => {
    const [auth, setAuth] = useState("");
    return (_jsxs("div", { className: S.wrapper, children: [_jsx("div", {}), _jsx("div", { className: S.form, children: auth === "reg" ? (_jsx(SignUp, { resetAuthResponse: props.resetAuthResponse, goBack: () => setAuth(""), regSubmitTC: props.regSubmitTC, regResponse: props.regResponse, goToLogIn: () => setAuth("log") })) : auth === "log" ? (_jsx(SignIn, { loadUserData: props.loadUserData, resetAuthResponse: props.resetAuthResponse, goBack: () => setAuth(""), logInSubmitTC: props.logInSubmitTC, isAuthorized: props.isAuthorized, logResponse: props.logResponse })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: "hover:cursor-pointer hover:opacity-70 transition duration-300", onClick: () => {
                                setAuth("reg");
                            }, children: "Sign Up" }), _jsx("div", { className: "hover:cursor-pointer hover:opacity-70 transition duration-300", onClick: () => {
                                setAuth("log");
                            }, children: "Sign In" })] })) })] }));
};
export default WelcomePage;
