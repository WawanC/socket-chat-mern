import { io } from "socket.io-client";
import ChatInput from "./components/ChatInput";
import ChatBox from "./components/ChatBox";

const App = () => {
  const socket = io("http://localhost:8080");

  return (
    <div className="w-full h-screen bg-gray-300 flex flex-col items-center py-10">
      <ChatBox />
      <ChatInput />
    </div>
  );
};

export default App;
