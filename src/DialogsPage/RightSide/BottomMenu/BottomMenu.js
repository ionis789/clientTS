import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MessageInputArea from "../../../ReusableComponnets/MessageInputArea.js";
import SendButton from "./SendButton.js";
const BottomMenu = ({ messageInputText, sendMessageTC, changeMessage, selectedRoomID, senderID, }) => {
    return (_jsxs("div", { className: "pl-4 pr-4  flex items-center justify-center gap-4 m-2", children: [_jsx(MessageInputArea, { messageInputText: messageInputText, changeMessage: changeMessage }), _jsx(SendButton, { sendMessageTC: sendMessageTC, selectedRoomID: selectedRoomID, senderID: senderID, messageInputText: messageInputText })] }));
};
export default BottomMenu;
