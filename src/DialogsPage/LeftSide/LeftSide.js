import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import TopMenuC from "./TopMenu/TopMenuC.js";
import { connect } from "react-redux";
import DialogsListType from "./DialogsListType/DialogsListType.js";
import { adaptWidthTC } from "../../redux/reducers/visualState.js";
const LeftSide = ({ isFocus, adaptWidthTC }) => {
    const elementRef = useRef(null);
    // first width checking and after only on resize event
    return (_jsxs("div", { ref: elementRef, children: [_jsx(TopMenuC, { isFocus: isFocus }), _jsx(DialogsListType, { isFocus: isFocus })] }));
};
const mapStateToProps = (state) => {
    return {
        isFocus: state.search.isFocus,
    };
};
export default connect(mapStateToProps, { adaptWidthTC })(LeftSide);
