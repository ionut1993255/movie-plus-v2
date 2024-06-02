import styled from "styled-components";

import Img from "../../ui/Img";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";

import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext";

const StyledMovieItem = styled.li`
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 2.4rem;
  align-items: center;
  position: relative;
  font-size: 1.6rem;
  padding: 1.6rem 3.2rem;
  border-bottom: 1px solid var(--color-background-100);
  cursor: pointer;
  transition: all 0.3s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: var(--color-background-100);
  }
`;

function MovieItem({ movie }) {
  const { handleSelectMovie } = useWatchedMoviesContext();

  const { imdbID, Poster, Title, Year } = movie;

  return (
    <StyledMovieItem onClick={() => handleSelectMovie(imdbID)}>
      <Img src={Poster} alt={`${Title} poster`} />

      <Heading as="h3">{Title}</Heading>

      <div>
        <Paragraph>
          <span>🗓</span>
          <span>{Year}</span>
        </Paragraph>
      </div>
    </StyledMovieItem>
  );
}

export default MovieItem;
