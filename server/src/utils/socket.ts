import http from "http";
import { Server } from "socket.io";

let io: Server;

export default {
  init: (httpServer: http.Server) => {
    io = new Server(httpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
      },
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("Socket Not Initialized");
    }
    return io;
  },
};
