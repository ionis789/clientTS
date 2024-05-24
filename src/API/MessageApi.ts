import { socket } from "../services/socket.js";

class MessageApi {
  sendMessage(room_id, sender_id, message_text) {
      socket.emit(
      "send_message",
      {
        room_id,
        sender_id,
        message_text,
      },
      room_id,
    );
  }
}

export const messageApi = new MessageApi();
