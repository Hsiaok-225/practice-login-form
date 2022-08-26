import styled from "styled-components";

const HeaderContainer = styled.div`
  /* width: 100%; */
  min-width: 300px;
  display: flex;
  font-size: 24px;
  font-weight: 500;
  justify-content: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);

  position: relative;
`;

const Back = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  position: absolute;
  left: 0px;
  cursor: pointer;
`;

export default function Header({ title, canBack }) {
  return (
    <HeaderContainer>
      {canBack && <Back>Back</Back>}
      <h2>{title}</h2>
    </HeaderContainer>
  );
}
