import styled from "styled-components";

import { average } from "../../utils/helpers.js";

import Heading from "../../ui/Heading.js";
import Paragraph from "../../ui/Paragraph.js";

import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext.js";

const StyledWatchedMoviesSummary = styled.div`
  padding: 2.2rem 3.2rem 1.8rem 3.2rem;
  border-radius: 0.9rem;
  background-color: var(--color-background-100);
  box-shadow: 0 1.2rem 2.4rem var(--color-black-transparent-20);

  & div {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

function WatchedMoviesSummary() {
  const { watchedMovies } = useWatchedMoviesContext();

  const imdbRatings = watchedMovies.map((movie) => movie.imdbRating || 0);
  const avgImdbRating = average(imdbRatings);

  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating));

  const runtimes = watchedMovies.map((movie) => movie.runtime || 0);
  const avgRuntime = average(runtimes);

  const numWatchedMovies = watchedMovies.length;

  return (
    <StyledWatchedMoviesSummary>
      <Heading as="h2" className="watched-summary-heading">
        Movies you watched
      </Heading>

      <div>
        <Paragraph>
          <span>#️⃣</span>
          <span>
            {numWatchedMovies} {numWatchedMovies === 1 ? "movie" : "movies"}
          </span>
        </Paragraph>

        <Paragraph>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </Paragraph>

        <Paragraph>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </Paragraph>

        <Paragraph>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </Paragraph>
      </div>
    </StyledWatchedMoviesSummary>
  );
}

export default WatchedMoviesSummary;
