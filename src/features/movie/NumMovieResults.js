import Paragraph from "../../ui/Paragraph";

import { useMoviesContext } from "../../contexts/MoviesContext";

function NumMovieResults() {
  const { movies } = useMoviesContext();

  const numMovieResults = movies.length;

  return (
    <Paragraph className="num-results">
      Found <strong>{numMovieResults}</strong> top results
    </Paragraph>
  );
}

export default NumMovieResults;
