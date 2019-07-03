import React, { Component, createRef } from "react";

import Thread from "./Thread";

class ThreadController extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    const messages = JSON.parse(localStorage.getItem("messages"));
    if (messages) {
      this.setState({
        messages: messages
      });
    }
  }

  inputMessage = createRef();

  postMessage = e => {
    e.preventDefault();
    const message = this.inputMessage.current.value;
    // const login = this.props.user;
    const messages = JSON.parse(localStorage.getItem("messages"));

    if (messages) {
      messages.push({ msg: message, date: new Date() });
      localStorage.setItem("messages", JSON.stringify(messages));
    } else {
      localStorage.setItem(
        "messages",
        JSON.stringify([{ msg: message, date: new Date() }])
      );
    }

    this.setState({ messages: messages });
    this.inputMessage.current.value = "";
  };
  render() {
    return (
      <Thread
        inputMessage={this.inputMessage}
        postMessage={this.postMessage}
        messages={this.state.messages}
      />
    );
  }
}

export default ThreadController;
