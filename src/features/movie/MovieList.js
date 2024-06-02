import { useMoviesContext } from "../../contexts/MoviesContext";

function MovieList({ render }) {
  const { movies } = useMoviesContext();

  return <ul>{movies.map(render)}</ul>;
}

export default MovieList;
