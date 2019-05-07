import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { CardForm, Input, Button, Title } from "./components";
import FlowerImg from "./img/icons8-flower-vase-48.png";

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

function Home(props) {
  const [state, setState] = useState({
    parentName: "",
    myName: "",
    message: ""
  });
  const parentNameEl = useRef(null);
  const myNameEl = useRef(null);

  useEffect(() => {
    parentNameEl.current.focus();
  }, []);

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    let { parentName, myName } = state;
    parentName = parentName.trim();
    myName = myName.trim();

    if (parentName === "") {
      alert("부모님 성함을 입력하세요.");
      parentNameEl.current.focus();
      return;
    } else if (myName === "") {
      alert("내 이름을 입력하세요.");
      myNameEl.current.focus();
      return;
    }
    // if (state.message.trim() === "") {
    //   alert("메시지를 입력하세요.");
    //   return;
    // }

    props.history.push(`${state.parentName}/${state.myName}/${state.message}`);
  };

  return (
    <CardForm onSubmit={handleSubmit}>
      <Row>
        <Title>부모님께 카네이션을 선물하세요!</Title>
        <img src={FlowerImg} alt="FlowerImg" width="48" height="48" />
      </Row>
      <Input
        ref={parentNameEl}
        type="text"
        placeholder="부모님 성함 혹은 호칭(예: 엄마)"
        value={state.parentName}
        onChange={handleChange("parentName")}
      />
      <Input
        ref={myNameEl}
        type="text"
        placeholder="내 이름 혹은 호칭(예: 아들)"
        value={state.myName}
        onChange={handleChange("myName")}
      />
      <Input
        type="text"
        placeholder="메시지(기본: 부모님 은혜에 감사합니다.)"
        value={state.message}
        onChange={handleChange("message")}
      />
      <Button type="submit" onClick={handleSubmit}>
        보내기
      </Button>
    </CardForm>
  );
}

export default withRouter(Home);
