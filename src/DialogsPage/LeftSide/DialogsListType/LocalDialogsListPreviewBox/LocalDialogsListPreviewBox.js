import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DialogAvatarPreview from "../DialogAvatarPreview/DialogAvatarPreview.js";
import defaultUserImg from "../../../../assets/default_user_img.svg";
const LocalDialogsListPreviewBox = ({ allRoomsData, selectRoom, selectedRoomID, }) => {
    return (_jsx("div", { children: !allRoomsData.isEmpty &&
            allRoomsData.map((r) => (_jsx("div", { onClick: () => selectRoom(r.roomID), className: selectedRoomID === r.roomID
                    ? "bg-blue-400  p-2 mb-2 transition duration-300 hover:cursor-pointer  "
                    : "hover:bg-neutral-500  p-2 mb-2 transition duration-300 hover:cursor-pointer", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(DialogAvatarPreview, { defaultUserImg: r.userCompanionInfo.photoURL
                                ? r.userCompanionInfo.photoURL
                                : defaultUserImg }), _jsxs("div", { children: [_jsx("p", { className: selectedRoomID === r.roomID
                                        ? "font-semibold text-md text-gray-950"
                                        : " font-semibold text-md", children: r.userCompanionInfo.user_name }), r.messages.length > 0 ? (_jsx("p", { className: selectedRoomID === r.roomID
                                        ? "font-regular text-md text-black transition duration-300"
                                        : " font-regular text-md", children: r.messages[r.messages.length - 1].message_text.length > 15
                                        ? r.messages[r.messages.length - 1].message_text.substring(0, 15) + "..."
                                        : r.messages[r.messages.length - 1].message_text })) : (_jsx("p", {}))] })] }) }, r.roomID))) }));
};
export default LocalDialogsListPreviewBox;
