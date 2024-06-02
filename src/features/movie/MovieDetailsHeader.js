import styled from "styled-components";

import Button from "../../ui/Button";
import Img from "../../ui/Img";
import MovieDetailsOverview from "./MovieDetailsOverview";

import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext";

const StyledMovieDetailsHeader = styled.header`
  display: flex;
`;

function MovieDetailsHeader() {
  const { handleCloseMovie, movie } = useWatchedMoviesContext();

  const { Poster: poster, Title: title } = movie;

  return (
    <StyledMovieDetailsHeader>
      <Button type="back" onClick={handleCloseMovie}>
        &larr;
      </Button>

      <Img
        src={poster}
        alt={`Poster of ${title} movie`}
        variant="movie-details"
      />

      <MovieDetailsOverview />
    </StyledMovieDetailsHeader>
  );
}

export default MovieDetailsHeader;
