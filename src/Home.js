import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { CardForm, Input, Button } from "./components";

function Home(props) {
  console.log("TCL: Home -> props", props);
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
    event.preventDefault();

    if (state.parentName.trim() === "") {
      alert("부모님 성함을 입력하세요.");
      return;
    } else if (state.myName.trim() === "") {
      alert("내 이름을 입력하세요.");
      return;
    }
    if (state.message.trim() === "") {
      alert("메시지를 입력하세요.");
      return;
    }

    props.history.push(`${state.parentName}/${state.myName}`);
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
      <Button onClick={handleSubmit} to={`${state.parentName}/${state.myName}`}>
        보내기
      </Button>
    </CardForm>
  );
}

export default withRouter(Home);
