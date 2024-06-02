import styled from "styled-components";

import Paragraph from "../../ui/Paragraph";
import MovieDetailsRating from "./MovieDetailsRating";

import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext";

const StyledMovieDetailsSection = styled.section`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

function MovieDetailsSection() {
  const { movie } = useWatchedMoviesContext();

  const { Plot: plot, Actors: actors, Director: director } = movie;

  return (
    <StyledMovieDetailsSection>
      <MovieDetailsRating />

      <Paragraph>
        <em>{plot}</em>
      </Paragraph>

      <Paragraph>Starring {actors}</Paragraph>

      <Paragraph>Directed by {director}</Paragraph>
    </StyledMovieDetailsSection>
  );
}

export default MovieDetailsSection;
