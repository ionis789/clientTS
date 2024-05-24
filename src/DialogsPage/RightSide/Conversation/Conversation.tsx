import TopMenu from "../TopMenu/TopMenu.js";
import MessagesRender from "../MessagesRender/MessagesRender.js";
import BottomMenuContainer from "../BottomMenu/BottomMenuContainer.js";
const Conversation = ({
  loggedUserID,
  selectedRoomData,
  selectedRoomID,
  potentialRoom,
  createRoomTC,
  selectRoom,
  isFocus,
}) => {
  return (
    <>
      {/*daca este un utilizator cu care am un room*/}
      {selectedRoomID && !potentialRoom.isInitiateConversation ? (
        <div className={"h-svh flex flex-col "}>
          <div>
            <TopMenu
              userCompanionInfo={selectedRoomData.userCompanionInfo}
              selectRoom={selectRoom}
            />
          </div>

          {selectedRoomData.messages.length !== 0 ? (
            <MessagesRender
              messages={selectedRoomData.messages}
              userCompanionID={selectedRoomData.userCompanionInfo.user_id}
            />
          ) : (
            <div className={"flex items-center justify-center h-svh"}>
              <h1 className={"font-bold text-3xl"}>No messages yet</h1>
            </div>
          )}

          <div>
            <BottomMenuContainer />
          </div>
        </div>
      ) : potentialRoom.isInitiateConversation ? (
        <div className={"flex flex-col justify-center items-center h-screen"}>
          <p className={"text-3xl font-semibold"}>
            Start new dialog with {potentialRoom.userCompanionName} ?
          </p>
          <br />
          <button
            className={
              "text-2xl font-medium hover:text-blue-400 transition duration-300 "
            }
            onClick={() =>
              createRoomTC(loggedUserID, potentialRoom.userCompanionID)
            }
          >
            Start
          </button>
        </div>
      ) : isFocus ? (
        <div
          className={
            "text-3xl font-semibold flex justify-center items-center h-screen"
          }
        >
          Find a user
        </div>
      ) : (
        <div
          className={
            "text-3xl font-semibold flex justify-center items-center h-screen"
          }
        >
          Select dialog
        </div>
      )}
    </>
  );
};

export default Conversation;
