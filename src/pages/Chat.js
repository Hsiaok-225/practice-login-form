import ChatRoom from "../components/ChatRoom";

export default function Main() {
  const rooms = [
    {
      image: "https://picsum.photos/200",
      username: "black dog",
      message: "I want to eat",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      username: "black dog",
      message: "I want to eat",
    },
    {
      image: "https://picsum.photos/200/",
      username: "black dog",
      message: "I want to eat",
    },
  ];

  return (
    <div>
      {rooms.map((room) => (
        <ChatRoom
          image={room.image}
          username={room.username}
          message={room.message}
        >
          chat here
        </ChatRoom>
      ))}
    </div>
  );
}
