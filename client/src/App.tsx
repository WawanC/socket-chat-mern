import { useState, useRef, useEffect } from "react";
import ChatInput from "./components/ChatInput";
import ChatBox from "./components/ChatBox";
import { Socket } from "socket.io-client";

interface propsInterface {
  socket: Socket;
}

const App: React.FC<propsInterface> = (props) => {
  const [chatList, setChatList] = useState(["Hola !", "Selamat Pagi"]);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const addChatList = (chatText: string) => {
    props.socket.emit("newChat", chatText);
    setChatList((prevState) => {
      const newChatList = [...prevState];
      newChatList.push(chatText);
      return newChatList;
    });
  };

  useEffect(() => {
    const fetchChat = async () => {
      const response = await fetch("http://localhost:8080/chat");
      if (response.ok) {
        const responseData = await response.json();
        setChatList(responseData.chatList);
      }
    };
    props.socket.on("newChatServer", (message) => {
      setChatList((prevState) => {
        const newChatList = [...prevState];
        newChatList.push(message);
        return newChatList;
      });
    });

    fetchChat();
  }, []);

  useEffect(() => {
    chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [chatList]);

  return (
    <div className="w-full h-screen bg-gray-300 flex flex-col items-center py-10">
      <ChatBox chatList={chatList} chatBoxRef={chatBoxRef} />
      <ChatInput onAddChat={addChatList} />
    </div>
  );
};

export default App;
