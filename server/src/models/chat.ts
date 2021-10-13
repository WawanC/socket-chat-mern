class Chat {
  message: string;
  creator: string;

  constructor(message: string, creator: string) {
    this.message = message;
    this.creator = creator;
  }

  get info() {
    return {
      message: this.message,
      creator: this.creator,
    };
  }
}

export default Chat;
