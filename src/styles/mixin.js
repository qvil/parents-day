import { css } from "styled-components";

export const CardStyle = css`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.11);
  background-color: white;
  border-radius: 4px;
  padding: 16px;
  max-width: 24rem;
  transition: 0.3s;
`;

export const RaisedCardStyle = css`
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 16px;
  max-width: 24rem;
  transition: 0.3s;
`;

export const ButtonStyle = css`
  padding: 8px;
  border-radius: 4px;
  margin-top: 16px;
  color: white;
  background: ${({ color }) => (color ? color : "rgba(52, 152, 219, 1)")};
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;
