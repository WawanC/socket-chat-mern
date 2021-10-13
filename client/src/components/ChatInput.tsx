import { useState } from "react";

interface propsInterface {
  onAddChat: (chatText: string, creator: string) => void;
}

const ChatInput: React.FC<propsInterface> = (props) => {
  const [enteredChat, setEnteredChat] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");

  const changeEnteredChatHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredChat(event.target.value);
  };

  const changeEnteredUsernameHandler: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      setEnteredUsername(event.target.value);
    };

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    if (enteredChat.length <= 0 || enteredUsername.length <= 0) {
      return alert("Fields cannot be empty");
    }
    props.onAddChat(enteredChat, enteredUsername);
    setEnteredChat("");
  };

  return (
    <form
      className="w-1/2 p-4 flex flex-col items-center gap-4"
      onSubmit={formSubmitHandler}
    >
      <div className="w-full">
        <span className="text-xl">Username : </span>
        <input
          type="text"
          className="text-xl border border-black p-2"
          placeholder="Username"
          value={enteredUsername}
          onChange={changeEnteredUsernameHandler}
          required
        ></input>
      </div>
      <input
        type="text"
        className="w-full text-3xl p-3"
        placeholder="Enter Chat Here..."
        onChange={changeEnteredChatHandler}
        value={enteredChat}
        required
      />
      <button
        type="submit"
        className="bg-white p-2 border border-black max-w-max"
      >
        Send Chat
      </button>
    </form>
  );
};

export default ChatInput;
