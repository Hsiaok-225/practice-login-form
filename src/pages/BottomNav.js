import styled from "styled-components";

const BottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.div`
  font-size: 16px;
  font-weight: 500;
  flex-grow: 1;
  padding: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background-color: black;
    color: white;
  }
`;

export default function BottomNav({ handleClick }) {
  return (
    <div>
      <BottomContainer>
        <Button>home</Button>
        <Button>search</Button>
        <Button
          onClick={() => {
            handleClick();
          }}
        >
          plus
        </Button>
        <Button>chat</Button>
        <Button>person</Button>
      </BottomContainer>
    </div>
  );
}
