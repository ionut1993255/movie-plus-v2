import styled from "styled-components";

import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext";

const StyledWatchedMoviesList = styled.ul`
  list-style: none;
  padding: 0.8rem 0;
`;

function WatchedMoviesList({ render }) {
  const { watchedMovies } = useWatchedMoviesContext();

  return (
    <StyledWatchedMoviesList>
      {watchedMovies.map(render)}
    </StyledWatchedMoviesList>
  );
}

export default WatchedMoviesList;
