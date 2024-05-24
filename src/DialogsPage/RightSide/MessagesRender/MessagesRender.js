import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef } from "react";
import RMessage from "./RMessage.js";
import LMessage from "./LMessage.js";
const MessagesRender = ({ messages, userCompanionID }) => {
    const scrollRef = useRef(null);
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "instant" });
    }, [messages.length, messages]);
    const messagesComponents = useMemo(() => {
        return messages.map((m) => {
            if (m.sender_id === userCompanionID)
                return (_jsx("div", { children: _jsx(LMessage, { messageText: m.message_text }) }, m.message_id));
            return (_jsx("div", { children: _jsx(RMessage, { messageText: m.message_text }) }, m.message_id));
        });
    }, [messages, messages.length]);
    return (_jsxs("div", { className: "overflow-y-auto h-svh", children: [messagesComponents, _jsx("div", { ref: scrollRef })] }));
};
export default MessagesRender;
