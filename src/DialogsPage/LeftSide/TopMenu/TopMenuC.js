import { jsx as _jsx } from "react/jsx-runtime";
import { connect } from "react-redux";
import { handleFocus, setSearchText } from "../../../redux/reducers/search.js";
import NavState from "./NavigationState/NavState.js";
import { eraseUsersTC } from "../../../redux/reducers/users.js";
import { logOut } from "../../../redux/reducers/auth.js";
const TopMenuC = ({ handleFocus, isFocus, eraseUsersTC, searchText, logOut, setSearchText, }) => {
    return (_jsx("div", { children: _jsx(NavState, { logOut: logOut, handleFocus: handleFocus, isFocus: isFocus, eraseUsersTC: eraseUsersTC, searchText: searchText, setSearchText: setSearchText }) }));
};
const mapStateToProps = (state) => {
    return {
        searchText: state.search.searchText,
    };
};
export default connect(mapStateToProps, {
    handleFocus,
    setSearchText,
    eraseUsersTC,
    logOut,
})(TopMenuC);
