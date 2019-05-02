import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardStyle, RaisedCardStyle } from "./styles/mixin";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
`;

const CardForm = styled.form`
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

// const Button = styled.button`
const Button = styled(Link)`
  padding: 8px;
  border-radius: 4px;
  margin-top: 16px;
  color: white;
  background: rgba(52, 152, 219, 1);
  text-decoration: none;
  text-align: center;
  &:hover {
    background: rgba(52, 152, 219, 0.8);
  }
`;

function Home() {
  const [state, setState] = useState({
    parentName: "",
    myName: "",
    message: ""
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleSubmit = event => {
    console.log("TCL: Home -> event", event);
    // event.preventDefault();
  };

  return (
    <Container>
      <CardForm onSubmit={handleSubmit}>
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
        <Button
          onClick={handleSubmit}
          to={`${state.parentName}/${state.myName}`}
        >
          보내기
        </Button>
      </CardForm>
    </Container>
  );
}

export default Home;
