import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import SearchBox from "../../SearchBox/SearchBox.js";
import { LuSettings2 } from "react-icons/lu";
const NavState = ({ handleFocus, isFocus, searchText, setSearchText, eraseUsersTC, logOut, }) => {
    const [settings, setSettings] = React.useState(false);
    const handleSettings = () => {
        setSettings(!settings);
    };
    return (_jsxs("div", { className: " flex justify-between items-center gap-4 m-4 h-14 ", children: [isFocus ? (_jsx(FaArrowLeft, { onClick: () => eraseUsersTC(), size: "18px", className: "hover: cursor-pointer hover:opacity-80 transition duration-200" })) : (_jsx(LuSettings2, { onClick: handleSettings, size: "24px", className: "hover: cursor-pointer hover:opacity-80 transition duration-200" })), _jsx(SearchBox, { handleFocus: handleFocus, searchText: searchText, setSearchText: setSearchText }), settings && (_jsx("div", { className: "absolute top-0", children: _jsx("button", { onClick: () => logOut(), children: "Log Out" }) }))] }));
};
export default NavState;
