const baseURL = "https://api.themoviedb.org/3";

const urls = {
  movies: {
    list: "/discover/movie",
    byId: (id: string | number) => `/movie/${id}`,
  },
  genres: {
    movie: "/genre/movie/list",
    tv: "/genre/tv/list",
  },
  // tvs: {
  //   base: "/discover/tv",
  //   byId: (id: string | number) => `/find/${id}`,
  // },
};

export { baseURL, urls };
