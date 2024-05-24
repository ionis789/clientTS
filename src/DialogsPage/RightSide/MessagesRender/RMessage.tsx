import React from "react";
import RightMessageBlock from "./RightMessageBlock.js";

const RMessage = ({ messageText }) => {
  return (
    <div className={"flex justify-end"}>
      <RightMessageBlock messageText={messageText} />
    </div>
  );
};

export default RMessage;
