import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./S.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsPage from "../DialogsPage/DialogsPage.js";
import WelcomePageContainer from "../WelcomePage/WelcomePageContainer.js";
let e = 4;
const names = ["jhon", "mike", "kate"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App = () => {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(WelcomePageContainer, {}) }), _jsx(Route, { path: "/d", element: _jsx(DialogsPage, {}) })] }) }));
};
export default App;
