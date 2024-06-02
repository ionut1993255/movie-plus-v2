import styled from "styled-components";

import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";

import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext";

const StyledMovieDetailsOverview = styled.div`
  width: 100%;
  padding: 2.4rem 3rem;
  background-color: var(--color-background-100);
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

function MovieDetailsOverview() {
  const { movie } = useWatchedMoviesContext();

  const {
    Title: title,
    Runtime: runtime,
    imdbRating,
    Released: released,
    Genre: genre,
  } = movie;

  return (
    <StyledMovieDetailsOverview>
      <Heading as="h2">{title}</Heading>

      <Paragraph>
        {released} &bull; {runtime}
      </Paragraph>

      <Paragraph>{genre}</Paragraph>

      <Paragraph>
        <span>⭐</span>
        {imdbRating} IMDb rating
      </Paragraph>
    </StyledMovieDetailsOverview>
  );
}

export default MovieDetailsOverview;
