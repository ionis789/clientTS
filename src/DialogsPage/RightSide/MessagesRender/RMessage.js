import { jsx as _jsx } from "react/jsx-runtime";
import RightMessageBlock from "./RightMessageBlock.js";
const RMessage = ({ messageText }) => {
    return (_jsx("div", { className: "flex justify-end", children: _jsx(RightMessageBlock, { messageText: messageText }) }));
};
export default RMessage;
