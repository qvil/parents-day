import React from "react";
import styled from "styled-components";
import { CardForm, Button, LinkButton, PhotoFrame } from "./components";

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const Message = styled.h2`
  text-align: center;
`;

const FromTo = styled.p`
  text-align: right;
`;

const Carnation = props => {
  const {
    parent,
    child,
    message = "부모님 은혜에 감사합니다."
  } = props.match.params;

  return (
    <CardForm>
      <PhotoFrame
        src={require(`./img/carnation${randomNumber(1, 6)}.jpg`)}
        alt="carnation"
      />
      <Message>{message}</Message>
      <FromTo>{`부모님(${parent})께 자식(${child}) 드림`}</FromTo>
      <Button>공유하기</Button>
      <LinkButton to="/" color="rgba(15, 185, 177, 1)">
        다시 보내기
      </LinkButton>
    </CardForm>
  );
};

export default Carnation;
