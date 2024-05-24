import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../ReusableComponnets/InputForm.js";
import { FaArrowLeft } from "react-icons/fa6";
import ErrorForm from "../ErrorForm.js";
const SignIn = ({ ...props }) => {
    const navigate = useNavigate();
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogIn = (e) => {
        e.preventDefault();
        props.logInSubmitTC(mail, password);
    };
    useEffect(() => {
        props.loadUserData();
        if (props.isAuthorized) {
            navigate("/d");
        }
    }, [props.isAuthorized]);
    return (_jsxs("div", { children: [_jsx("div", { onClick: props.goBack, className: "hover:cursor-pointer hover:opacity-70 transition duration-300 inline-block", children: _jsx(FaArrowLeft, {}) }), !props.logResponse ? (_jsxs("form", { className: "bg-neutral-800 p-4 rounded-xl flex flex-col gap-4", children: [_jsx(InputForm, { placeHolder: "Email", setInputData: setMail }), _jsx(InputForm, { placeHolder: "Password", setInputData: setPassword }), _jsx("button", { className: "hover:cursor-pointer hover:opacity-70 transition duration-300", onClick: (e) => handleLogIn(e), children: "Log In" })] })) : (_jsx(ErrorForm, { message: props.logResponse.message, goBack: props.goBack, resetAuthResponse: props.resetAuthResponse }))] }));
};
export default SignIn;
