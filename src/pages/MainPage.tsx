import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import GenresComponent from "../components/Genres/GenresListComponent";
import MoviesListComponent from "../components/Movies/MoviesListComponent";
import MoviesPaginationComponent from "../components/Movies/MoviesPaginationComponent";
import { compareTwoScalarArrays } from "../helpers/arraysHelper";
import { genresActions } from "../redux/slices/genresSlice";
import { moviesActions } from "../redux/slices/moviesSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

const MainPage = () => {
  const { selectedGenres, page } = useAppSelector((state) => state.moviesSlice);

  const [searchParams] = useSearchParams();
  const pageQeuryParamString = searchParams.get("page");
  let pageQueryParam: number = 1;
  if (pageQeuryParamString) {
    pageQueryParam = +pageQeuryParamString;
  }

  const slectedGenresQueryString = searchParams.get("genres");
  let selectedGenresQueryParam: number[] = [];
  if (slectedGenresQueryString) {
    selectedGenresQueryParam = JSON.parse(slectedGenresQueryString);
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!compareTwoScalarArrays(selectedGenres, selectedGenresQueryParam)) {
      dispatch(moviesActions.chageSelectedGenres(selectedGenresQueryParam));
    }
    if (page != pageQueryParam) {
      dispatch(moviesActions.changePage(pageQueryParam));
    }
  }, [pageQueryParam, selectedGenresQueryParam]);

  useEffect(() => {
    dispatch(moviesActions.loadMovies());
  }, [page, selectedGenres]);

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
