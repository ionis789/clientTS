import React, { useEffect, useMemo, useRef, useState } from "react";
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
        return (
          <div key={m.message_id}>
            <LMessage messageText={m.message_text} />
          </div>
        );

      return (
        <div key={m.message_id}>
          <RMessage messageText={m.message_text} />
        </div>
      );
    });
  }, [messages, messages.length]);

  return (
    <div className={"overflow-y-auto h-svh"}>
      {messagesComponents}
      <div ref={scrollRef} />
    </div>
  );
};

export default MessagesRender;
