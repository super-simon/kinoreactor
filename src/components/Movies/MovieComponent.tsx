import { useAppSelector } from "../../redux/store";

const MovieComponent = () => {
  const { movie } = useAppSelector((state) => state.moviesSlice);
  return <div>{movie && movie.title}</div>;
};

export default MovieComponent;
