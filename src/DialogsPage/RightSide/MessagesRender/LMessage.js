import { jsx as _jsx } from "react/jsx-runtime";
import LeftMessageBlock from "./LeftMessageBlock.js";
const LMessage = ({ messageText }) => {
    return (_jsx("div", { className: "flex", children: _jsx(LeftMessageBlock, { messageText: messageText }) }));
};
export default LMessage;
