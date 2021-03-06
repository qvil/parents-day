import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  CardStyle,
  RaisedCardStyle,
  ButtonStyle,
  fadeIn
} from "../styles/mixin";

export const Title = styled.h2`
  font-weight: normal;
  text-align: center;
  font-family: "Nanum Pen Script", cursive;
  /* font-family: "Gamja Flower", cursive; */
`;

export const CardForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: skyblue;
  max-width: 800px;
  ${CardStyle};
  &:hover,
  &:focus {
    ${RaisedCardStyle};
  }
  animation: ${fadeIn} 0.5s linear;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  padding: 8px;
  border-bottom: 1px solid rgba(52, 152, 219, 1);
  border-radius: 0%;
  flex: 1;
  box-sizing: border-box;
  margin-top: 8px;
`;

export const Button = styled.button`
  ${ButtonStyle};
`;

export const LinkButton = styled(Link)`
  ${ButtonStyle};
`;

export const PhotoFrame = styled.img`
  max-width: 100%;
  max-height: 300px;
  border-radius: 5%;
`;

export const StyledSpan = styled.span`
  font-family: "Gamja Flower", cursive;
`;
