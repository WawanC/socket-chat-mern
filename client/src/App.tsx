import { useState, useRef, useEffect } from "react";
import ChatInput from "./components/ChatInput";
import ChatBox from "./components/ChatBox";
import { Socket } from "socket.io-client";
import Chat from "./models/chat";

interface propsInterface {
  socket: Socket;
}

const App: React.FC<propsInterface> = (props) => {
  const [chatList, setChatList] = useState<Chat[]>([]);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const addChatList = (chatText: string, creator: string) => {
    props.socket.emit("newChat", chatText, creator);
    setChatList((prevState) => {
      const newChatList = [...prevState];
      newChatList.push(new Chat(chatText, creator));
      return newChatList;
    });
  };

  useEffect(() => {
    const fetchChat = async () => {
      // const response = await fetch("http://localhost:8080/chat");
      const response = await fetch("http://f2fa-182-1-34-153.ngrok.io/chat");
      if (response.ok) {
        const responseData = (await response.json()) as {
          chatList: Chat[];
        };
        const fetchedChatList: Chat[] = [];
        responseData.chatList.forEach((chat) => {
          fetchedChatList.push(new Chat(chat.message, chat.creator));
        });
        setChatList(fetchedChatList);
      }
    };
    props.socket.on("newChatServer", (payload) => {
      setChatList((prevState) => {
        const newChatList = [...prevState];
        newChatList.push(new Chat(payload.message, payload.creator));
        return newChatList;
      });
    });

    fetchChat();
  }, [props.socket]);

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
