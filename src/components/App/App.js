import GlobalStyles from "../styles/Global";
import "../../index.css";
import styled from "styled-components";
import { useState } from "react";

const LoginFormContainer = styled.div`
  padding: 24px;

  @media screen and (min-width: 375px) {
    display: flex;
    max-width: 1200px;
    margin: auto;
    justify-content: space-between;
  }
`;
const Header = styled.div`
  color: white;

  text-align: center;
  margin-top: 50px;

  @media screen and (min-width: 375px) {
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: left;
    margin-top: 0px;

    flex: 1;
    max-width: 550px;
  }
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;

  @media screen and (min-width: 375px) {
  }
`;

const TitleContent = styled.div`
  font-size: 16px;
  margin-top: 20px;

  @media screen and (min-width: 375px) {
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 375px) {
    display: flex;
    flex: 1;
  }
`;

const Button = styled.button`
  color: white;
  background-color: hsl(248, 32%, 49%);
  width: 100%;

  font-size: 16px;
  border: 0;
  padding: 20px 50px;
  margin-top: 60px;
  border-radius: 8px;

  box-shadow: 0 8px rgba(0, 0, 0, 0.15);
`;

const RegisterForm = styled.div`
  width: 100%;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  margin-top: 24px;
  box-shadow: 0 8px rgba(0, 0, 0, 0.15);
`;

const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

const InputField = styled.input`
  height: 40px;
  width: 100%;

  font-size: 16px;
  padding: 0 20px;

  align-items: center;
  justify-content: center;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  ${(props) => props.error && `border: 1px solid hsl(0, 100%, 74%)`}
`;

const Label = styled.label.attrs({})`
  position: absolute;
  left: 16px;

  color: rgb(0, 0, 0, 0.5);
  font-size: "20px";
  font-weight: 500;
  padding: 8px;
`;

const ErrorMsg = styled.div`
  font-size: 14px;
  color: hsl(0, 100%, 74%);
  text-align: right;
`;

function Input({ label, id, error, errorMsg }) {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputFieldContainer>
      {value === "" ? (
        <Label htmlFor={id}>{label}</Label>
      ) : (
        <Label style={{ opacity: "0" }} htmlFor={id}>
          {label}
        </Label>
      )}
      <InputField
        type={id}
        name={id}
        id={id}
        onChange={handleInput}
        error={error}
      ></InputField>
      <ErrorMsg>{error && errorMsg}</ErrorMsg>
    </InputFieldContainer>
  );
}

const InputFieldContainer = styled.div`
  margin-top: 16px;
`;

const RegisterButton = styled.button`
  color: white;
  background-color: hsl(154, 59%, 51%);

  width: 100%;
  font-size: 16px;
  font-weight: 500;
  border: 0;

  height: 60px;
  padding: 0 40px;
  margin-top: 16px;

  border-radius: 4px;
  cursor: pointer;
`;

const Note = styled.div`
  color: rgb(180, 180, 180);

  width: 80%;
  font-size: 8px;
  text-align: center;

  margin-top: 12px;
`;

const Service = styled.a.attrs({
  href: "#",
})`
  color: hsl(0, 100%, 74%);
  font-weight: 500;
`;

export default function App() {
  const [formState, setFormState] = useState([
    {
      id: "First Name",
      label: "First Name",
      error: false,
      errorMsg: "First name cannot be empty",
    },
    {
      id: "Last Name",
      label: "Last Name",
      error: false,
      errorMsg: "Last name cannot be empty",
    },
    {
      id: "Email",
      label: "Email",
      error: false,
      errorMsg: "Look like this is not an email",
    },
    {
      id: "Password",
      label: "Password",
      error: false,
      errorMsg: "Password cannot be empty",
    },
  ]);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    setFormState(
      formState.map((element) => ({
        ...element,
        error: !Boolean(data[element.id]),
      }))
    );
  };

  return (
    <LoginFormContainer>
      <GlobalStyles />
      <Header>
        <Title>Learn to code by watching others</Title>
        <TitleContent>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </TitleContent>
      </Header>
      <Section>
        <Button>{<b>Try it free 7 days</b>} then $20/mo. thereafter</Button>
        <RegisterForm>
          <InputContainer>
            <form onSubmit={handleRegister}>
              {formState.map(({ label, id, error, errorMsg }) => (
                <Input
                  key={id}
                  label={label}
                  id={id}
                  type={id}
                  error={error}
                  errorMsg={errorMsg}
                ></Input>
              ))}

              <RegisterButton>CLAIM YOUR FREE TRIAL</RegisterButton>
            </form>
          </InputContainer>
          <Note>
            By clicking the button, you are agreeing to our{" "}
            <Service>Terms and Services</Service>
          </Note>
        </RegisterForm>
      </Section>
    </LoginFormContainer>
  );
}
