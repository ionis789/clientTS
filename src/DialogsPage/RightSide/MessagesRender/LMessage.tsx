import React from "react";
import LeftMessageBlock from "./LeftMessageBlock.js";

const LMessage = ({ messageText }) => {
  return (
    <div className={"flex"}>
      <LeftMessageBlock messageText={messageText} />
    </div>
  );
};

export default LMessage;
