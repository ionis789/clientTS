import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import LocalDialogsListC from "./LocalDialogsList/LocalDialogsListC.js";
import GlobalDialogsListC from "./GlobalDialogsList/GlobalDialogsListC.js";
const DialogsListType = ({ isFocus }) => {
    return _jsx(_Fragment, { children: isFocus ? _jsx(GlobalDialogsListC, {}) : _jsx(LocalDialogsListC, {}) });
};
export default DialogsListType;
