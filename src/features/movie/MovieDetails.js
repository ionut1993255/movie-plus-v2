import styled from "styled-components";
import { useEffect } from "react";

import Loader from "../../ui/Loader";
import MovieDetailsHeader from "./MovieDetailsHeader";
import MovieDetailsSection from "./MovieDetailsSection";

import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext";
import { useKey } from "../../hooks/useKey";

const StyledMovieDetails = styled.div`
  line-height: 1.4;
  font-size: 1.4rem;
`;

function MovieDetails() {
  const { movie, handleCloseMovie, isLoading } = useWatchedMoviesContext();
  useKey("Escape", handleCloseMovie);

  const { Title: title } = movie;

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie Plus | ${title}`;

      return function () {
        document.title = "Movie Plus";
      };
    },
    [title]
  );

  return (
    <StyledMovieDetails>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MovieDetailsHeader />
          <MovieDetailsSection />
        </>
      )}
    </StyledMovieDetails>
  );
}

export default MovieDetails;
