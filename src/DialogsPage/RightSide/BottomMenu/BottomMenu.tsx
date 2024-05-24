import MessageInputArea from "../../../ReusableComponnets/MessageInputArea.js";
import SendButton from "./SendButton.js";

const BottomMenu = ({
  messageInputText,
  sendMessageTC,
  changeMessage,
  selectedRoomID,
  senderID,
}) => {
  return (
    <div className={"pl-4 pr-4  flex items-center justify-center gap-4 m-2"}>
      <MessageInputArea
        messageInputText={messageInputText}
        changeMessage={changeMessage}
      />
      <SendButton
        sendMessageTC={sendMessageTC}
        selectedRoomID={selectedRoomID}
        senderID={senderID}
        messageInputText={messageInputText}
      />
    </div>
  );
};

export default BottomMenu;
