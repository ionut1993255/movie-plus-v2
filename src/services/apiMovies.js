import { API_MOVIES_ROOT } from "../utils/constants";

const KEY = process.env.REACT_APP_OMDB_API_KEY;

export async function fetchMoviesApi(query) {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const res = await fetch(`${API_MOVIES_ROOT}/?apikey=${KEY}&s=${query}`, {
      signal,
    });

    if (!res.ok) throw new Error("Something went wrong with fetching movies!");

    const data = await res.json();

    if (data.Response === "False") throw new Error("Movie not found!");

    const filteredMovies = data.Search.filter(
      (movie) => movie.Poster !== "N/A"
    );

    return filteredMovies;
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Fetch aborted!");
    } else {
      throw err;
    }
  } finally {
    controller.abort();
  }
}

export async function fetchMovieDetailsApi(movieId) {
  try {
    const res = await fetch(`${API_MOVIES_ROOT}/?apikey=${KEY}&i=${movieId}`);

    if (!res.ok)
      throw new Error("Something went wrong with fetching movie details!");

    const data = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
}
