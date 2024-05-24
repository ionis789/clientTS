import { jsx as _jsx } from "react/jsx-runtime";
const LeftMessageBlock = ({ messageText }) => {
    return (_jsx("div", { className: "p-2 m-4 mr-6 rounded-xl bg-neutral-500", style: { maxWidth: "70%" }, children: _jsx("p", { className: "text-md font-regular opacity-100", style: { wordWrap: "break-word" }, children: messageText }) }));
};
export default LeftMessageBlock;
