const ChatInput: React.FC = () => {
  return (
    <form className="w-1/2 p-4">
      <input
        type="text"
        className="w-full text-3xl p-3"
        placeholder="Enter Chat Here..."
      />
    </form>
  );
};

export default ChatInput;
