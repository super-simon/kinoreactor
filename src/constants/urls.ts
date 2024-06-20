const baseURL = "https://api.themoviedb.org/3";

const urls = {
  movies: {
    list: "/discover/movie",
    search: "/search/movie",
    details: (id: string | number) => `/movie/${id}`,
  },
  genres: {
    movie: "/genre/movie/list",
    tv: "/genre/tv/list",
  },
};

export { baseURL, urls };
