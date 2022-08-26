import { useState } from "react";
import styled from "styled-components";
import BottomNav from "../BottomNav";
import Header from "../Header";

const ChatBoxContainer = styled.div`
  display: flex;
  margin: 20px;
`;

const ChatBoxImg = styled.div``;
const ChatMessage = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 16px;
  margin: 0 16px;
`;

function ChatBox({ image, message, right }) {
  const elements = [
    <ChatBoxImg>
      <img src={image} alt="" width="50px" style={{ borderRadius: "50%" }} />
    </ChatBoxImg>,
    <ChatMessage>
      <p>{message}</p>
    </ChatMessage>,
  ];

  return (
    <ChatBoxContainer>{right ? elements.reverse() : elements}</ChatBoxContainer>
  );
}

function ChatRoom({ messages }) {
  return (
    <div>
      {messages.map((message, index) => (
        <ChatBox
          key={message.message}
          image={message.image}
          message={message.message}
          right={index % 2}
        ></ChatBox>
      ))}
    </div>
  );
}

function App() {
  const [messages, setMessages] = useState([
    {
      image: "https://picsum.photos/200/",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "https://picsum.photos/200/",
      message:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod tempor .",
    },
  ]);

  const handleClick = () => {
    console.log("click");
    setMessages([
      ...messages,
      {
        image: "https://picsum.photos/200/",
        message:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod tempor .",
      },
    ]);
  };

  return (
    <div>
      <Header title="James" canBack></Header>
      <ChatRoom messages={messages}></ChatRoom>
      <BottomNav handleClick={handleClick}></BottomNav>
    </div>
  );
}

export default App;
