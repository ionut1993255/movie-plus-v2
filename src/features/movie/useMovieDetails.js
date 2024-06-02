import { useState, useEffect } from "react";

import { fetchMovieDetailsApi } from "../../services/apiMovies";

export function useMovieDetails(selectedId) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!selectedId) return;

    async function getMovieDetails() {
      setIsLoading(true);
      setError("");

      try {
        const movieData = await fetchMovieDetailsApi(selectedId);
        setMovie(movieData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieDetails();
  }, [selectedId]);

  return { movie, isLoading, error };
}
