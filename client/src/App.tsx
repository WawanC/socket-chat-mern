import { io } from "socket.io-client";

const App = () => {
  const socket = io("http://localhost:8080");

  return <div className="text-red-500">Hello World</div>;
};

export default App;
