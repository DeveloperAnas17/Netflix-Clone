import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <Container>
      <h1>This is me</h1>
      <p>
        When I was 3 years old Don't know Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolorum sapiente dolores tempora porro sit assumenda!
      </p>
      <Button>
        <PlayBtn>Play</PlayBtn>
        <Trailer>Trailer</Trailer>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  background-image: url("https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  width: 95%;
  height: 400px;
  margin: 0 auto;
  border-radius: 15px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  padding: 80px 10px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
`;

const PlayBtn = styled.div`
  background-color: rgba(255, 244, 255, 0.7);
  padding: 3px;
  text-align: center;
  width: 100px;
  height: 30px;
  cursor: pointer;

  :hover {
    background-color: rgba(1, 1, 1, 0.8);
    color: #f1f4ff;
  }
`;

const Trailer = styled(PlayBtn)`
  margin-left: 15px;
  background-color: rgba(1, 1, 1, 0.8);
  color: #f1f4ff;

  :hover {
    background-color: rgba(255, 244, 255, 0.7);
    color: black;
  }
`;
export default Banner;
