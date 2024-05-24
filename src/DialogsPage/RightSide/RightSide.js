import { jsx as _jsx } from "react/jsx-runtime";
import Conversation from "./Conversation/Conversation.tsx";
import { connect } from "react-redux";
import { createRoomTC, selectRoom } from "../../redux/reducers/rooms.ts";
const RightSide = ({ potentialRoom, loggedUserID, selectedRoomID, createRoomTC, selectedRoomData, selectRoom, isFocus, }) => {
    return (_jsx("div", { children: _jsx(Conversation, { isFocus: isFocus, selectRoom: selectRoom, selectedRoomData: selectedRoomData, selectedRoomID: selectedRoomID, loggedUserID: loggedUserID, potentialRoom: potentialRoom, createRoomTC: createRoomTC }) }));
};
const mapStateToProps = (state) => {
    return {
        selectedRoomData: state.rooms.selectedRoomData,
        selectedRoomID: state.rooms.selectedRoomID,
        potentialRoom: state.rooms.potentialRoom,
        loggedUserID: state.auth.loggedUserID,
        isFocus: state.search.isFocus,
    };
};
export default connect(mapStateToProps, {
    createRoomTC,
    selectRoom,
})(RightSide);
