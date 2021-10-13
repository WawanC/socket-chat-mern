import express from "express";
import corsHandler from "./utils/cors";
import serverIO from "./utils/socket";

export const chatList: string[] = [];

const app = express();

app.use(corsHandler);

app.get("/chat", (req, res, next) => {
  res.status(200).json({
    chatList: chatList,
  });
});

const server = app.listen(8080);

const io = serverIO.init(server);

io.on("connection", (socket) => {
  console.log("New Connection");

  socket.on("newChat", (message) => {
    console.log(message);
    chatList.push(message);
    socket.broadcast.emit("newChatServer", message);
  });
});
