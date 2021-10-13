import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { io } from "socket.io-client";

// const socket = io("http://localhost:8080");
const socket = io("http://f2fa-182-1-34-153.ngrok.io");

ReactDOM.render(
  <React.StrictMode>
    <App socket={socket} />
  </React.StrictMode>,
  document.getElementById("root")
);
