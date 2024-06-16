import { useAppSelector } from "../../redux/store";

const MoviesComponent = () => {
  const { movies } = useAppSelector((state) => state.moviesSlice);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default MoviesComponent;
