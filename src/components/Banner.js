import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import styled from "styled-components";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <Header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <Content>
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <Buttons>
          <Button>Play</Button>
          <Button>My List</Button>
        </Buttons>

        <p className="banner__description">
          {truncate(movie?.overview, 150)}
          {movie?.overview}
        </p>
      </Content>
      <div className="banner--fadeBottom" />
    </Header>
  );
}

const Header = styled.div`
  color: white;
  object-fit: contain;
  height: 448px;

  .banner--fadeBottom {
    height: 7.4rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
    position: relative;
    top: 23vh;
  }
`;

const Content = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;

  h1 {
    font-size: 3em;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }

  p {
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 360px;
    height: 80px;
  }
`;

const Buttons = styled.div`
  display: flex;
`;
const Button = styled.div`
  cursor: pointer;
  color: #fff;
  background-color: rgba(51, 51, 51, 0.5);
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  :hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;
// const Button = styled(Button)``;
export default Banner;
