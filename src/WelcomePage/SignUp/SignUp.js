import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import InputForm from "../../ReusableComponnets/InputForm.js";
import { FaArrowLeft } from "react-icons/fa6";
import ErrorForm from "../ErrorForm.js";
const SignUp = ({ goBack, regSubmitTC, regResponse, goToLogIn, resetAuthResponse, }) => {
    const [mail, setMail] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const handleRegistration = (e) => {
        e.preventDefault();
        regSubmitTC(mail, name, password);
    };
    return (_jsxs("div", { children: [_jsx("div", { onClick: goBack, className: " hover:cursor-pointer hover:opacity-70 transition duration-300 inline-block", children: _jsx(FaArrowLeft, {}) }), _jsx("form", { className: "bg-neutral-800 p-4 rounded-xl flex flex-col gap-4", children: !regResponse ? (_jsxs(_Fragment, { children: [_jsx(InputForm, { setInputData: setMail, placeHolder: "Email" }), _jsx(InputForm, { setInputData: setName, placeHolder: "Name" }), _jsx(InputForm, { setInputData: setPassword, placeHolder: "Password" }), _jsx("button", { onClick: (e) => handleRegistration(e), className: "hover:cursor-pointer hover:opacity-70 transition duration-300", children: "Create account" })] })) : (_jsx("div", { children: regResponse.status == 200 ? (_jsxs("span", { className: "flex  flex-col  gap-4 justify-center", children: [_jsx("p", { className: "text-green-500", children: regResponse.message }), _jsx("button", { className: "text-xl font-medium hover:opacity-80", onClick: goToLogIn, children: "Go to Log In form" })] })) : (_jsx(ErrorForm, { message: regResponse.message, resetAuthResponse: resetAuthResponse, goBack: goBack })) })) })] }));
};
export default SignUp;
