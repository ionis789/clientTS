import { jsx as _jsx } from "react/jsx-runtime";
import { connect } from "react-redux";
import BottomMenu from "./BottomMenu.js";
import { changeMessage, sendMessageTC, } from "../../../redux/reducers/messages.js";
const BottomMenuContainer = ({ messageInputText, sendMessageTC, senderID, selectedRoomID, changeMessage, }) => {
    return (_jsx(BottomMenu, { sendMessageTC: sendMessageTC, messageInputText: messageInputText, changeMessage: changeMessage, senderID: senderID, selectedRoomID: selectedRoomID }));
};
const mapStateToProps = (state) => {
    return {
        senderID: state.auth.loggedUserID,
        selectedRoomID: state.rooms.selectedRoomID,
        messageInputText: state.messagesSender.messageInputText,
    };
};
export default connect(mapStateToProps, {
    sendMessageTC,
    changeMessage,
})(BottomMenuContainer);
