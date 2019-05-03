import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
`;

const Layout = ({ children, ...others }) => {
  return <Container {...others}>{children}</Container>;
};

export default Layout;
