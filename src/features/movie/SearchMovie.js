import { useRef } from "react";

import Input from "../../ui/Input";

import { useMoviesContext } from "../../contexts/MoviesContext";
import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext";
import { useKey } from "../../hooks/useKey";

function SearchMovie() {
  const inputEl = useRef(null);
  const { query, setQuery } = useMoviesContext();
  const { handleCloseMovie } = useWatchedMoviesContext();

  useKey("Slash", function () {
    if (document.activeElement === inputEl.current) return;

    inputEl.current.focus();
    setQuery("");
    handleCloseMovie();
  });

  return (
    <Input
      id="search-movies-input"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default SearchMovie;
