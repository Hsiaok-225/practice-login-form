import styled from "styled-components";

const RoomContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const RoomAvatar = styled.div`
  margin-left: 12px;
`;

const RoomBody = styled.div`
  margin-left: 12px;
  font-size: 16px;
`;

export default function ChatRoom({ image, username, message }) {
  return (
    <RoomContainer>
      <RoomAvatar>
        <img className="img" src={image} alt="" />
      </RoomAvatar>
      <RoomBody>
        <h4>{username}</h4>
        <p>{message}</p>
      </RoomBody>
    </RoomContainer>
  );
}
