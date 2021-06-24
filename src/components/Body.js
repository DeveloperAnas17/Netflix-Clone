import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Banner from "./Banner";
import Originals from "./Originals";

function Body() {
  return (
    <Container>
      <Header />
      <Banner />
      <Originals />
      <Originals />
      <Originals />
      <Originals />
    </Container>
  );
}

const Container = styled.div`
  flex: 0.8;
  min-width: fit-content;
`;
export default Body;
