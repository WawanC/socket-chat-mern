import express from "express";
import http from "http";
import corsHandler from "./utils/cors";
import { Server, Socket } from "socket.io";

const app = express();

app.use(corsHandler);

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log("New Connection");
});

httpServer.listen(8080);
