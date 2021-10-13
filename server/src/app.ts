import express from "express";
import corsHandler from "./utils/cors";
import serverIO from "./utils/socket";

const app = express();

app.use(corsHandler);

const server = app.listen(8080);

const io = serverIO.init(server);

io.on("connection", (socket) => {
  console.log("New Connection");
});
