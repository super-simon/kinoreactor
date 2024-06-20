import { FC } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { generateSearchQuery } from "../../helpers/searchQueryHelper";
import { IMovie } from "../../models/IMovie";
import { useAppSelector } from "../../redux/store";
import "./MoviesListItemComponent.css";

interface IProps {
  movie: IMovie;
}

const MoviesListItemComponent: FC<IProps> = ({ movie }) => {
  const { genresById } = useAppSelector((state) => state.genresSlice);
  return (
    <>
      <div className="imgWrap">
        <div className="posterContainer">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="genres">
          {movie.genre_ids.map((id) => (
            <div className="genre" key={id}>
              <Link
                to={{
                  pathname: "/",
                  search: generateSearchQuery({
                    genres: [id],
                  }),
                }}
              >
                {genresById[id]}
              </Link>
            </div>
          ))}
        </div>

        <div className="stars">
          <StarRatings
            rating={movie.vote_average}
            starRatedColor="yellow"
            // changeRating={this.changeRating}
            numberOfStars={10}
            name="rating"
            starDimension="0.8em"
            starSpacing="0.1em"
          />
        </div>
      </div>
      <Link to={`/movie/${movie.id}`} className="link">
        <h2>{movie.title}</h2>
      </Link>
    </>
  );
};

export default MoviesListItemComponent;
