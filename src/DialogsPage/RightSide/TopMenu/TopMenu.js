import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DialogAvatarPreview from "../../LeftSide/DialogsListType/DialogAvatarPreview/DialogAvatarPreview.js";
import defaultUserImg from "../../../assets/default_user_img.svg";
import { FaArrowLeft } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { LuVideo } from "react-icons/lu";
import { LuSettings2 } from "react-icons/lu";
const TopMenu = ({ userCompanionInfo, selectRoom }) => {
    return (_jsxs("div", { className: " flex justify-around items-center ", children: [_jsx(FaArrowLeft, { onClick: () => selectRoom(null), size: "20px", className: "hover: cursor-pointer hover:opacity-80 transition duration-200" }), _jsx("div", { className: "flex items-center justify-center", children: _jsxs("div", { className: `flex justify-center gap-2 items-center p-1`, children: [_jsx(DialogAvatarPreview, { defaultUserImg: userCompanionInfo.photoURL
                                ? userCompanionInfo.photoURL
                                : defaultUserImg }), _jsx("p", { className: "text-md font-bold", children: userCompanionInfo.user_name })] }) }), _jsxs("div", { className: "flex items-center justify-center gap-6", children: [_jsx(LuPhone, { size: "24px", className: "hover: cursor-pointer hover:opacity-80 transition duration-200" }), _jsx(LuVideo, { size: "24px", className: "hover: cursor-pointer hover:opacity-80 transition duration-200" })] }), _jsx("div", { children: _jsx(LuSettings2, { size: "24px", className: "hover: cursor-pointer hover:opacity-80 transition duration-200" }) })] }));
};
export default TopMenu;
