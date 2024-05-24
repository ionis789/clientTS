import { jsx as _jsx } from "react/jsx-runtime";
const LeftMessageBlock = ({ messageText }) => {
    return (_jsx("div", { className: "p-2 m-4 ml-6 rounded-xl", style: { maxWidth: "70%", background: "rgb(255, 255, 255, 0.2)" }, children: _jsx("p", { className: "text-lg font-normal opacity-100", style: { wordWrap: "break-word" }, children: messageText }) }));
};
export default LeftMessageBlock;
