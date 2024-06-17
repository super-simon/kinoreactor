import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage";
import MoviePage from "../pages/MoviePage";
import MoviesPage from "../pages/MoviesPage";

const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "movies", element: <MoviesPage /> },
      { path: "movie/:id", element: <MoviePage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
