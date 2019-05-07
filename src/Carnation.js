import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import {
  CardForm,
  LinkButton,
  PhotoFrame,
  Title,
  Input,
  StyledSpan
} from "./components";
import { sendLink } from "./lib/kakao";
import CopyIcon from "./img/icons8-copy-link-48.png";
import ClipboardJS from "clipboard";

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const FromTo = styled.p`
  text-align: right;
  font-family: "Gamja Flower", cursive;
`;

const ClipBoard = styled(Input)`
  margin: 0 8px;
`;

const ShareDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgButton = styled.img`
  width: 48px;
  height: 48px;
  padding: 8px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    background: rgba(52, 152, 219, 0.3);
    border-radius: 4px;
    transition: 1s;
  }
`;

const Carnation = props => {
  const {
    parent,
    child,
    message = "부모님 은혜에 감사합니다."
  } = props.match.params;
  const shareEl = useRef(null);

  useEffect(() => {
    const clipboard = new ClipboardJS("#shareButton");
    clipboard.on("success", e => {
      alert("URL이 클립보드에 복사되었습니다!");
    });
    clipboard.on("error", e => {
      alert("URL 복사에 실패했습니다 :(");
      console.log("TCL: e", e);
    });
  }, []);

  // const handleShare = () => {
  // shareEl.current.select();
  // document.execCommand("copy");
  // };

  return (
    <CardForm>
      <PhotoFrame
        src={require(`./img/carnation${randomNumber(1, 6)}.jpg`)}
        alt="carnation"
      />
      <Title>{message}</Title>
      <FromTo>{`부모님(${parent})께 자식(${child}) 드림`}</FromTo>

      <ShareDiv>
        <StyledSpan>공유하기</StyledSpan>
        <ClipBoard
          id="clipboard"
          ref={shareEl}
          type="text"
          value={window.location.href}
          onChange={() => {}}
          contenteditable="true"
        />
        <ImgButton
          src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          alt="kakaolink_btn_medium.png"
          onClick={sendLink({
            targetLink: window.location.href,
            parent,
            child,
            message
          })}
        />
        <ImgButton
          id="shareButton"
          src={CopyIcon}
          alt="CopyIcon"
          // onClick={handleShare}
          data-clipboard-target="#clipboard"
        />
      </ShareDiv>

      <LinkButton to="/" color="rgba(15, 185, 177, 1)">
        다시 보내기
      </LinkButton>
    </CardForm>
  );
};

export default Carnation;
