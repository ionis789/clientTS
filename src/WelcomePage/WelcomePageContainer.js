import { jsx as _jsx } from "react/jsx-runtime";
import WelcomePage from "./WelcomePage.js";
import { connect } from "react-redux";
import { loadUserData, logInSubmitTC, regSubmitTC, resetAuthResponse, } from "../redux/reducers/auth.js";
const WelcomePageContainer = ({ regSubmitTC, logInSubmitTC, isAuthorized, regResponse, logResponse, resetAuthResponse, loadUserData, }) => {
    return (_jsx(WelcomePage, { loadUserData: loadUserData, logInSubmitTC: logInSubmitTC, regSubmitTC: regSubmitTC, isAuthorized: isAuthorized, regResponse: regResponse, logResponse: logResponse, resetAuthResponse: resetAuthResponse }));
};
const mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized,
        regResponse: state.auth.regResponse,
        logResponse: state.auth.logResponse,
    };
};
export default connect(mapStateToProps, {
    regSubmitTC,
    logInSubmitTC,
    loadUserData,
    resetAuthResponse,
})(WelcomePageContainer);
