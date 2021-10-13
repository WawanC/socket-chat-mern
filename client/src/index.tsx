import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { io } from "socket.io-client";

// const socket = io("http://localhost:8080");
const socket = io("https://socket-chat-mern.herokuapp.com/");

ReactDOM.render(
  <React.StrictMode>
    <App socket={socket} />
  </React.StrictMode>,
  document.getElementById("root")
);
