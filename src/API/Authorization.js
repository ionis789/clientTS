import axios from "axios";
const API = import.meta.env.VITE_PRODUCTION_API_URL;
class Authorization {
    async regRequest(mail, name, password) {
        try {
            const response = await axios.post(`${API}/auth/registration`, {
                mail,
                name,
                password,
            }, {
                withCredentials: true,
            });
            return {
                status: response.status,
                message: response.data.message,
            };
        }
        catch (error) {
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        }
    }
    async logInRequest(mail, password) {
        try {
            const response = await axios.post(`${API}/auth/login`, {
                mail,
                password,
            });
            localStorage.setItem("loggedUserInfo", JSON.stringify({
                accessToken: response.data.accessToken,
                isAuthorized: response.data.isAuthorized, // multumita la asta se va face useNavigate la dialogs
                loggedUserID: response.data.loggedUserID,
                loggedUserName: response.data.loggedUserName,
                loggedUserMail: response.data.loggedUserMail,
            }));
            return response;
        }
        catch (error) {
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        }
    }
}
export const authorization = new Authorization();
