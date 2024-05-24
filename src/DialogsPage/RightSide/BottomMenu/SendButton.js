import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { GrSend } from "react-icons/gr";
const SendButton = ({ sendMessageTC, senderID, selectedRoomID, messageInputText, }) => {
    useEffect(() => {
        const keyEnterPress = (event) => {
            event.keyCode === 13 &&
                messageInputText &&
                sendMessageTC(selectedRoomID, senderID, messageInputText);
        };
        document.addEventListener("keydown", keyEnterPress);
        return () => {
            document.removeEventListener("keydown", keyEnterPress);
        };
    }, [messageInputText]);
    return (_jsx("button", { onClick: () => sendMessageTC(selectedRoomID, senderID, messageInputText), children: _jsx(GrSend, { size: "24px" }) }));
};
export default SendButton;
