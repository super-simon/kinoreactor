import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import GenresComponent from "../components/Genres/GenresListComponent";
import MoviesListComponent from "../components/Movies/MoviesListComponent";
import MoviesPaginationComponent from "../components/Movies/MoviesPaginationComponent";
import { genresActions } from "../redux/slices/genresSlice";
import { moviesActions } from "../redux/slices/moviesSlice";
import { useAppDispatch } from "../redux/store";

const MainPage = () => {
  const [searchParams] = useSearchParams();
  let page = searchParams.get("page");
  if (!page) {
    page = "1";
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(moviesActions.changePageAndLoadMovies(page));
  }, [page]);

  useEffect(() => {
    dispatch(genresActions.loadGenres());
  }, []);

  return (
    <>
      MainPage
      <br />
      <GenresComponent />
      <MoviesPaginationComponent />
      <MoviesListComponent />
      <MoviesPaginationComponent />
    </>
  );
};

export default MainPage;
