import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IMovie } from "../../models/IMovie";
import { apiService } from "../../services/api.service";

type MoviesSliceType = {
  movies: IMovie[];
  page: string | null;
  totalPages: number | null;
  totalResults: number | null;
};

const moviesInitialState: MoviesSliceType = {
  movies: [],
  page: null,
  totalPages: null,
  totalResults: null,
};

const changePageAndLoadMovies = createAsyncThunk(
  "moviesSlice/changePage",
  async (page: string, thunkAPI) => {
    const state = thunkAPI.getState() as MoviesSliceType;
    if (page && state.page != page) {
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

// const loadMovies = createAsyncThunk(
//   "moviesSlice/loadMovies",
//   async (_, thunkAPI) => {
//     try {
//       const state = thunkAPI.getState() as MoviesSliceType;
//       if (state.page) {
//         const moviesResponse = await apiService.getMoviesList({
//           page: state.page,
//         });
//         return thunkAPI.fulfillWithValue(moviesResponse.data);
//       }
//     } catch (e) {
//       const error = e as AxiosError;
//       return thunkAPI.rejectWithValue(error.response?.data);
//     }
//   }
// );

// const loadPostById = createAsyncThunk(
//   "postSlice/loadPostById",
//   async (id: string | undefined, thunkAPI) => {
//     if (id) {
//       try {
//         const post = await postService.getById(id);
//         thunkAPI.dispatch(postActions.changeLoadState(true));
//         return thunkAPI.fulfillWithValue(post);
//       } catch (e) {
//         const error = e as AxiosError;
//         return thunkAPI.rejectWithValue(error.response?.data);
//       }
//     }
//     return null;
//   }
// );

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
      state.movies = action.payload?.results || [];
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
  // loadMovies,
  changePageAndLoadMovies,
  // loadPostById,
};
