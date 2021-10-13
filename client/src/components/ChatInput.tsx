import { useState } from "react";

interface propsInterface {
  onAddChat: (chatText: string) => void;
}

const ChatInput: React.FC<propsInterface> = (props) => {
  const [enteredChat, setEnteredChat] = useState("");

  const changeEnteredChatHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredChat(event.target.value);
  };

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    props.onAddChat(enteredChat);
    setEnteredChat("");
  };

  return (
    <form className="w-1/2 p-4" onSubmit={formSubmitHandler}>
      <input
        type="text"
        className="w-full text-3xl p-3"
        placeholder="Enter Chat Here..."
        onChange={changeEnteredChatHandler}
        value={enteredChat}
      />
    </form>
  );
};

export default ChatInput;
