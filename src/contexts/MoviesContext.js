import { createContext, useContext, useState } from "react";

import { useMovies } from "../features/movie/useMovies";

const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMovies(query);

  return (
    <MoviesContext.Provider
      value={{ query, setQuery, movies, isLoading, error }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

function useMoviesContext() {
  const context = useContext(MoviesContext);

  if (context === undefined)
    throw new Error("MoviesContext was used outside of the MoviesProvider.");

  return context;
}

export { MoviesProvider, useMoviesContext };
