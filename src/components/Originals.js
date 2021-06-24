import React, { useState, useEffect } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import styled from "styled-components";

const base_url = "https://image.tmdb.org/t/p/original";

function Originals({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Container>
      <h2>{title}</h2>
      <Content>
        {movies.map((movie) => (
          <Wrap>
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <h3>{movie.name}</h3>
          </Wrap>
        ))}
      </Content>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 15px;

  h2 {
    color: #f1f4ff;
    margin-left: 22px;
  }
`;

const Content = styled.div`
  margin: 20px 0;
  padding: 10px 20px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  position: relative;
  padding-top: 60%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  h3 {
    position: absolute;
    top: 20px;
    padding: 20px;
    z-index: 1;
    color: red;
    font-weight: bold;
  }
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: -20;
    top: 0;

    .row-poster {
      object-fit: contain;
      width: 100%;
      max-height: 100px;
      margin-right: 10px;
      transition: transform 450ms;
      min-height: 250px;
      transition: transform 450ms;
    }
  }

  &:hover {
    box-shadow: rgba(0 0 0/ 80%) 0px 40px 56px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default Originals;
