import { useState, useRef } from "react";
import { io } from "socket.io-client";
import ChatInput from "./components/ChatInput";
import ChatBox from "./components/ChatBox";

const App = () => {
  // const socket = io("http://localhost:8080");
  const [chatList, setChatList] = useState(["Hola !", "Selamat Pagi"]);

  const addChatList = (chatText: string) => {
    setChatList((prevState) => {
      const newChatList = [...prevState];
      newChatList.push(chatText);
      return newChatList;
    });
  };

  return (
    <div className="w-full h-screen bg-gray-300 flex flex-col items-center py-10">
      <ChatBox chatList={chatList} />
      <ChatInput onAddChat={addChatList} />
    </div>
  );
};

export default App;
