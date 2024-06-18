import { FC } from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../../models/IMovie";
import "./MoviesListItemComponent.css";

interface IProps {
  movie: IMovie;
}

const MoviesListItemComponent: FC<IProps> = ({ movie }) => {
  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <h2>{movie.title}</h2>
      </Link>
    </>
  );
};

export default MoviesListItemComponent;
