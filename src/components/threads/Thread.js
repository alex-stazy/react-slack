import React from "react";
import Moment from "react-moment";

function Thread({ inputMessage, postMessage, messages, isLogin }) {
  return (
    <div>
      {messages.length > 0 &&
        messages.map((message, idx) => (
          <p key={idx}>
            [{message.login}] (<Moment date={message.date} format="HH:mm" />
            ): {message.msg}
          </p>
        ))}
      {isLogin && (
        <form onSubmit={postMessage}>
          <input ref={inputMessage} type="text" />
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
}

export default Thread;
