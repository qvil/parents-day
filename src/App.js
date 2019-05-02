import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { CardStyle, RaisedCardStyle } from "./styles/mixin";

const GlobalStyle = createGlobalStyle`
 html, body, #root {
   margin: 0;
   padding: 0;
   height: 100%;
 }
 button {
   outline: none;
   border: none;
 }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: skyblue;
  max-width: 800px;
  ${CardStyle};
  &:hover {
    ${RaisedCardStyle};
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  padding: 8px;
  border-bottom: 1px solid rgba(52, 152, 219, 1);
  width: 100%;
  box-sizing: border-box;
  margin-top: 8px;
`;

const Button = styled.button`
  padding: 8px;
  margin-top: 16px;
  color: white;
  background: rgba(52, 152, 219, 1);
  &:hover {
    background: rgba(52, 152, 219, 0.8);
  }
`;

function App() {
  const [state, setState] = useState();
  console.log("TCL: App -> state", state);

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleClick = () => {
    console.log(state);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <h2>부모님께 카네이션을 선물하세요!</h2>
          <Input
            type="text"
            placeholder="부모님 성함"
            onChange={handleChange("parentName")}
          />
          <Input
            type="text"
            placeholder="내 이름"
            onChange={handleChange("myName")}
          />
          <Input
            type="text"
            placeholder="메시지(기본 : 부모님 은혜에 감사합니다.)"
            onChange={handleChange("message")}
          />
          <Button onClick={handleClick}>보내기</Button>
        </Card>
      </Container>
    </>
  );
}

export default App;
