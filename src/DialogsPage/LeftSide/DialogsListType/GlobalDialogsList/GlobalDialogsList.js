import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DialogAvatarPreview from "../DialogAvatarPreview/DialogAvatarPreview.js";
const GlobalDialogsList = ({ selectedGlobalUserID, updatedUsers, defaultUserImg, initiatePotentialRoomTC, }) => {
    return (_jsx("div", { className: "mt-4 ", children: !updatedUsers.isEmpty ? (updatedUsers.map((d) => (_jsx("div", { onClick: () => initiatePotentialRoomTC(d.user_id, d.user_name), className: selectedGlobalUserID === d.user_id
                ? "bg-blue-500  p-2 mb-2 transition duration-300 hover:cursor-pointer  "
                : "hover:bg-neutral-600  p-2 mb-2 transition duration-300 hover:cursor-pointer", children: _jsx("div", { className: "flex justify-between items-center", children: _jsxs("div", { className: "flex gap-3 items-center", children: [_jsx(DialogAvatarPreview, { defaultUserImg: d.photoURL ? d.photoURL : defaultUserImg }), _jsx("p", { className: "font-semibold text-md", children: d.user_name })] }) }) }, d.user_id)))) : (_jsx("div", {})) }));
};
export default GlobalDialogsList;
