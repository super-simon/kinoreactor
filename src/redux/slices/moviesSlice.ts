import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IMovie } from "../../models/IMovie";
import { apiService } from "../../services/api.service";

type MoviesSliceType = {
  movies: IMovie[];
  movie: IMovie | null;
  page: number | null;
  totalPages: number | null;
  totalResults: number | null;
};

const moviesInitialState: MoviesSliceType = {
  movies: [],
  movie: null,
  page: null,
  totalPages: null,
  totalResults: null,
};

const changePageAndLoadMovies = createAsyncThunk(
  "moviesSlice/changePage",
  async (page: string, thunkAPI) => {
    const state = thunkAPI.getState() as MoviesSliceType;
    if (page && state.page != +page) {
      try {
        const moviesResponse = await apiService.getMoviesList({ page });
        // thunkAPI.dispatch(moviesActions.changePage(page));
        return thunkAPI.fulfillWithValue(moviesResponse.data);
      } catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error.response?.data);
      }
    }
  }
);

const loadMovie = createAsyncThunk(
  "moviesSlice/loadMovie",
  async (id: number | string, thunkApi) => {
    const movieResponse = await apiService.getMovieDetails({ id });
    return thunkApi.fulfillWithValue(movieResponse.data);
  }
);

export const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: moviesInitialState,
  reducers: {
    // changePage: (state, action) => {
    //   state.page = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(changePageAndLoadMovies.fulfilled, (state, action) => {
      state.page = action.payload?.page || null;
      state.totalPages =
        action.payload?.total_pages && action.payload?.total_pages > 500
          ? 500
          : action.payload?.total_pages || null;
      state.totalResults = action.payload?.total_results || null;
      state.movies = action.payload?.results || [];
    });
    builder.addCase(loadMovie.fulfilled, (state, action) => {
      state.movie = action.payload || null;
    });
    // builder.addCase(loadPosts.rejected, (state) => {
    //   state.posts = [];
    // });
    // builder.addCase(loadPostById.fulfilled, (state, action) => {
    //   state.post = action.payload;
    // });
    // builder.addCase(loadPostById.rejected, (state) => {
    //   state.post = null;
    // });
    // builder.addMatcher(isFulfilled(loadPostById, loadPosts), (state) => {
    //   state.isLoaded = true;
    // });
  },
});

export const moviesActions = {
  ...moviesSlice.actions,
  changePageAndLoadMovies,
  loadMovie,
  // loadPostById,
};
