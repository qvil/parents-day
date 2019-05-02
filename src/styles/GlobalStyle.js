import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html, body, #root {
   margin: 0;
   padding: 0;
   height: 100%;
 }
 button {
   outline: none;
   border: none;
 }
`;

export default GlobalStyle;
