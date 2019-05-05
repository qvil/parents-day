import React, { useState, useEffect, useRef } from "react";
import { CardForm, Input, LinkButton } from "./components";

function Home() {
  const [state, setState] = useState({
    parentName: "",
    myName: "",
    message: ""
  });
  const parentNameEl = useRef(null);

  useEffect(() => {
    parentNameEl.current.focus();
  }, []);

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleSubmit = event => {
    console.log("TCL: Home -> event", event);
    // event.preventDefault();
  };

  return (
    <CardForm onSubmit={handleSubmit}>
      <h2>부모님께 카네이션을 선물하세요!</h2>
      <Input
        ref={parentNameEl}
        type="text"
        placeholder="부모님 성함"
        value={state.parentName}
        onChange={handleChange("parentName")}
      />
      <Input
        type="text"
        placeholder="내 이름"
        value={state.myName}
        onChange={handleChange("myName")}
      />
      <Input
        type="text"
        placeholder="메시지(기본 : 부모님 은혜에 감사합니다.)"
        value={state.message}
        onChange={handleChange("message")}
      />
      <LinkButton
        onClick={handleSubmit}
        to={`${state.parentName}/${state.myName}`}
      >
        보내기
      </LinkButton>
    </CardForm>
  );
}

export default Home;
