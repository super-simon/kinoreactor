import axios, { AxiosResponse } from "axios";
import { baseURL, urls } from "../constants/urls";
import { IMovie } from "../models/IMovie";
import { IMovies } from "../models/IMovies";

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}` },
});

export const apiService = {
  getMoviesList: async ({
    page,
  }: {
    page: string;
  }): Promise<AxiosResponse<IMovies>> => {
    const res = await axiosInstance.get<IMovies>(
      urls.movies.list + `?page=${page}`
    );
    return res;
  },

  getMovieDetails: async ({
    id,
  }: {
    id: string | number;
  }): Promise<AxiosResponse<IMovie>> => {
    const res = await axiosInstance.get<IMovie>(urls.movies.details(id));
    return res;
  },
};
