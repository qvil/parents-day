import styled from "styled-components";
import { Link } from "react-router-dom";
import { CardStyle, RaisedCardStyle } from "../styles/mixin";

export const CardForm = styled.form`
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

export const Input = styled.input`
  outline: none;
  border: none;
  padding: 8px;
  border-bottom: 1px solid rgba(52, 152, 219, 1);
  width: 100%;
  box-sizing: border-box;
  margin-top: 8px;
`;

// const Button = styled.button`
export const Button = styled(Link)`
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
