import { jsx as _jsx } from "react/jsx-runtime";
const MessageInputArea = ({ messageInputText, changeMessage }) => {
    return (_jsx("div", { className: " h-full flex justify-center items-center w-full", children: _jsx("input", { className: " bg-neutral-800 w-full rounded-xl appearance-none text-amber-50  p-2 leading-tight focus:outline-none ", value: messageInputText, placeholder: "Message...", type: "text", onChange: (e) => changeMessage(e.target.value) }) }));
};
export default MessageInputArea;
