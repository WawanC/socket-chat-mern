import ChatBubble from "./ChatBubble";

const ChatBox: React.FC = () => {
  const chatList = ["Hello", "Hola !", "Selamat Pagi"];

  return (
    <div className="bg-white p-4 border-2 border-black w-1/2 h-3/4 rounded flex flex-col gap-4">
      {chatList.map((chat) => {
        return <ChatBubble text={chat} />;
      })}
    </div>
  );
};

export default ChatBox;
