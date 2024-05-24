import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { connect } from "react-redux";
import { loadUserData } from "../redux/reducers/auth.js";
import WelcomePageContainer from "../WelcomePage/WelcomePageContainer.js";
export const WithAuth = (WrappedComponent) => {
    const AuthComponent = ({ isAuthorized, loadUserData, ...props }) => {
        useEffect(() => {
            loadUserData();
        }, [isAuthorized, loadUserData]);
        return isAuthorized ? (_jsx(WrappedComponent, { ...props })) : (_jsx(WelcomePageContainer, {}));
    };
    const mapStateToProps = (state) => ({
        isAuthorized: state.auth.isAuthorized,
    });
    const mapDispatchToProps = {
        loadUserData,
    };
    return connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
};
