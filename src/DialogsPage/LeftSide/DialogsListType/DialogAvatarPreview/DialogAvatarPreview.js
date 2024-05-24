import { jsx as _jsx } from "react/jsx-runtime";
const DialogAvatarPreview = ({ defaultUserImg }) => {
    return (_jsx("div", { className: "hover:cursor-pointer", children: _jsx("img", { alt: "user photo", src: defaultUserImg, className: "w-12 h-12 rounded-xl" }) }));
};
export default DialogAvatarPreview;
