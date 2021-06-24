import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Originals from "./Originals";
import requests from "../requests";

function Body() {
  return (
    <Container>
      <Banner />
      <Originals
        title="NETFLIX ORIGINALAS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Originals title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Originals title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Originals title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Originals title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Originals title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Originals
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Originals title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </Container>
  );
}

const Container = styled.div`
  /* flex: 0.8; */
`;
export default Body;
