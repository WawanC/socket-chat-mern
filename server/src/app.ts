import express from "express";
import corsHandler from "./utils/cors";
import serverIO from "./utils/socket";
import Chat from "./models/chat";

export const chatList: Chat[] = [];

const app = express();

app.use(corsHandler);

app.get("/chat", (req, res, next) => {
  res.status(200).json({
    chatList: chatList,
  });
});

const server = app.listen(process.env.PORT || 8080);

const io = serverIO.init(server);

io.on("connection", (socket) => {
  console.log("New Connection");

  socket.on("newChat", (message, creator) => {
    const newChat = new Chat(message, creator);

    console.log(newChat);
    chatList.push(newChat);

    if (chatList.length > 10) {
      chatList.shift();
    }

    socket.broadcast.emit("newChatServer", newChat.info);
  });
});
