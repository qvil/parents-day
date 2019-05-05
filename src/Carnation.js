import React from "react";
import { CardForm, Button, LinkButton, PhotoFrame } from "./components";

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const Carnation = props => {
  console.log("TCL: match", props);
  return (
    <CardForm>
      <PhotoFrame
        src={require(`./img/carnation${randomNumber(1, 6)}.jpg`)}
        alt="carnation"
      />
      <h2>부모님 은혜에 감사합니다!</h2>
      {/* {`parent: ${parent}, child: ${child}`} */}
      <Button>공유하기</Button>
      <LinkButton to="/" color="rgba(15, 185, 177, 1)">
        다시 보내기
      </LinkButton>
    </CardForm>
  );
};

export default Carnation;
