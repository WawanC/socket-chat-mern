import ChatBubble from "./ChatBubble";

interface propsInterface {
  chatList: string[];
  chatBoxRef: React.LegacyRef<HTMLDivElement>;
}

const ChatBox: React.FC<propsInterface> = (props) => {
  return (
    <div
      ref={props.chatBoxRef}
      className="bg-white p-4 border-2 border-black w-1/2 h-3/4 rounded flex flex-col gap-4 overflow-auto"
    >
      {props.chatList.map((chat) => {
        return <ChatBubble text={chat} key={chat} />;
      })}
    </div>
  );
};

export default ChatBox;
