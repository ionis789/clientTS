import axios from "axios";
import { socket } from "../services/socket.ts";
const API = import.meta.env.VITE_PRODUCTION_API_URL;
class RoomsApi {
  async createRoom(loggedUserID, userCompanionID) {
    socket.emit("create_room", { loggedUserID, userCompanionID });
  }
  async getRooms() {
    try {
      const accessToken = JSON.parse(
        localStorage.getItem("loggedUserInfo"),
      ).accessToken;
      return await axios.get(`${API}/rooms`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      return {
        status: error.status,
        message: error.data.message,
      };
    }
  }
}

const roomsApi = new RoomsApi();
export default roomsApi;
