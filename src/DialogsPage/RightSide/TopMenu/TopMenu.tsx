import DialogAvatarPreview from "../../LeftSide/DialogsListType/DialogAvatarPreview/DialogAvatarPreview.js";
import defaultUserImg from "../../../assets/default_user_img.svg";
import { FaArrowLeft } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { LuVideo } from "react-icons/lu";
import { LuSettings2 } from "react-icons/lu";
const TopMenu = ({ userCompanionInfo, selectRoom }) => {
  return (
    <div className={" flex justify-around items-center "}>
      <FaArrowLeft
        onClick={() => selectRoom(null)}
        size={"20px"}
        className="hover: cursor-pointer hover:opacity-80 transition duration-200"
      />
      <div className={"flex items-center justify-center"}>
        <div className={`flex justify-center gap-2 items-center p-1`}>
          <DialogAvatarPreview
            defaultUserImg={
              userCompanionInfo.photoURL
                ? userCompanionInfo.photoURL
                : defaultUserImg
            }
          />
          <p className={"text-md font-bold"}>{userCompanionInfo.user_name}</p>
        </div>
      </div>
      <div className={"flex items-center justify-center gap-6"}>
        <LuPhone
          size={"24px"}
          className="hover: cursor-pointer hover:opacity-80 transition duration-200"
        />
        <LuVideo
          size={"24px"}
          className="hover: cursor-pointer hover:opacity-80 transition duration-200"
        />
      </div>
      <div>
        <LuSettings2
          size={"24px"}
          className="hover: cursor-pointer hover:opacity-80 transition duration-200"
        />
      </div>
    </div>
  );
};

export default TopMenu;
