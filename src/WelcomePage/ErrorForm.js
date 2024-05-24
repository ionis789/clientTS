import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ErrorForm = ({ message, resetAuthResponse, goBack }) => {
    return (_jsxs("div", { children: [_jsx("p", { className: "text-red-500 text-center", children: message }), _jsxs("div", { className: "flex justify-around ", children: [_jsx("button", { className: "text-xl font-medium mt-4 hover:opacity-80 transition duration-300", onClick: goBack, children: "Go back" }), _jsx("button", { className: "text-xl font-medium mt-4 hover:opacity-80 transition duration-300", onClick: resetAuthResponse, children: "Try again" })] })] }));
};
export default ErrorForm;
