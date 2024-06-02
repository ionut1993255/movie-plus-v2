import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import StarRating from "../../ui/StarRating";
import Button from "../../ui/Button";
import Paragraph from "../../ui/Paragraph";

import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext";

const StyledMovieDetailsRating = styled.div`
  background-color: var(--color-background-100);
  border-radius: 0.9rem;
  padding: 2rem 2.4rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function MovieDetailsRating() {
  const [userRating, setUserRating] = useState("");
  const countRef = useRef(0);
  const {
    movie,
    selectedMovieId,
    handleCloseMovie,
    handleAddToWatched,
    watchedMovies,
  } = useWatchedMoviesContext();

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
  } = movie;

  const isWatched = watchedMovies
    .map((movie) => movie.imdbID)
    .includes(selectedMovieId);

  const watchedMovieUserRating = watchedMovies.find(
    (movie) => movie.imdbID === selectedMovieId
  )?.userRating;

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );

  function handleAddMovieToWatched() {
    const newWatchedMovie = {
      imdbID: selectedMovieId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countRef.current,
    };

    handleAddToWatched(newWatchedMovie);
    handleCloseMovie();
  }

  return (
    <StyledMovieDetailsRating>
      {!isWatched ? (
        <>
          <StarRating maxRating={10} size={24} onSetRating={setUserRating} />

          {userRating > 0 && (
            <Button
              type="add"
              className="light-mode-special-button-colors"
              onClick={handleAddMovieToWatched}
            >
              + Add to list
            </Button>
          )}
        </>
      ) : (
        <Paragraph>
          You rated this movie with {watchedMovieUserRating}
          <span>⭐</span>
        </Paragraph>
      )}
    </StyledMovieDetailsRating>
  );
}

export default MovieDetailsRating;
