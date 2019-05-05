import styled from "styled-components";
import { Link } from "react-router-dom";
import { CardStyle, RaisedCardStyle, ButtonStyle } from "../styles/mixin";

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
`;

export const Input = styled.input`
  outline: none;
  border: none;
  padding: 8px;
  border-bottom: 1px solid rgba(52, 152, 219, 1);
  width: 100%;
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
  max-height: 400px;
  border-radius: 5%;
`;
