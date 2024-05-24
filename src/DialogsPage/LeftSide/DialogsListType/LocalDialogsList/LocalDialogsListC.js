import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import LocalDialogsListPreviewBox from "../LocalDialogsListPreviewBox/LocalDialogsListPreviewBox.js";
import { connect } from "react-redux";
import { selectRoom } from "../../../../redux/reducers/rooms.js";
const LocalDialogsListC = ({ allRoomsData, selectRoom, selectedRoomID }) => {
    return (_jsx(_Fragment, { children: _jsx(LocalDialogsListPreviewBox, { allRoomsData: allRoomsData, selectRoom: selectRoom, selectedRoomID: selectedRoomID }) }));
};
const mapStateToProps = (state) => {
    return {
        allRoomsData: state.rooms.allRoomsData,
        selectedRoomID: state.rooms.selectedRoomID,
    };
};
export default connect(mapStateToProps, { selectRoom })(LocalDialogsListC);
