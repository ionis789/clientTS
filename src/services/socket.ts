import { io } from "socket.io-client";

const API = import.meta.env.VITE_PRODUCTION_API_URL;
export const socket = io(API);
