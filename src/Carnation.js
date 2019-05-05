import React, { useRef } from "react";
import styled from "styled-components";
import { CardForm, Button, LinkButton, PhotoFrame, Title } from "./components";

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const FromTo = styled.p`
  text-align: right;
  font-family: "Gamja Flower", cursive;
`;

const ClipBoard = styled.input`
  z-index: -9;
  position: fixed;
  color: transparent;
  background: transparent;
  border: none;
`;

const Carnation = props => {
  const {
    parent,
    child,
    message = "부모님 은혜에 감사합니다."
  } = props.match.params;
  const shareEl = useRef(null);

  const handleShare = () => {
    shareEl.current.select();
    document.execCommand("copy");
    alert("URL이 클립보드에 복사되었습니다!");
  };

  return (
    <CardForm>
      <PhotoFrame
        src={require(`./img/carnation${randomNumber(1, 6)}.jpg`)}
        alt="carnation"
      />
      <Title>{message}</Title>
      <FromTo>{`부모님(${parent})께 자식(${child}) 드림`}</FromTo>
      <ClipBoard
        ref={shareEl}
        type="text"
        value={window.location.href}
        onChange={() => {}}
      />
      <Button type="button" onClick={handleShare}>
        공유하기
      </Button>
      <LinkButton to="/" color="rgba(15, 185, 177, 1)">
        다시 보내기
      </LinkButton>
    </CardForm>
  );
};

export default Carnation;
