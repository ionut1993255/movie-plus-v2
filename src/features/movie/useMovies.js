import { useState, useEffect } from "react";

import { fetchMoviesApi } from "../../services/apiMovies";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    let isMounted = true;
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const moviesData = await fetchMoviesApi(query, {
          signal: controller.signal,
        });
        if (isMounted) {
          setMovies(moviesData);
          setError("");
        }
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchMovies();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
