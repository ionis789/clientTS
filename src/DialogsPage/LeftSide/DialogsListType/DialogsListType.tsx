import React from "react";
import LocalDialogsListC from "./LocalDialogsList/LocalDialogsListC.js";
import GlobalDialogsListC from "./GlobalDialogsList/GlobalDialogsListC.js";

const DialogsListType = ({ isFocus }) => {
  return <>{isFocus ? <GlobalDialogsListC /> : <LocalDialogsListC />}</>;
};

export default DialogsListType;
