interface propsInterface {
  text: string;
}

const ChatBubble: React.FC<propsInterface> = (props) => {
  return (
    <div className="w-max p-2 border-2 border-black rounded-xl">
      <p className="text-xl">{props.text}</p>
    </div>
  );
};

export default ChatBubble;
