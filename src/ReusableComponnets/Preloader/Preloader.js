import { jsx as _jsx } from "react/jsx-runtime";
import S from "./S.module.css";
const Preloader = () => {
    return (_jsx("div", { className: "flex justify-center items-center w-16 h-16", children: _jsx("div", { className: `${S.loader} ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12` }) }));
};
export default Preloader;
