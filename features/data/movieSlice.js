import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIkey } from "../../common/apis/tmdbApiKey";
import tmdbAPI from "../../common/apis/tmdbApi";
import { useState } from "react";

export const fetchAsyncTrending = createAsyncThunk(
  "fetchAsyncTrending",
  async () => {
    const response = await tmdbAPI.get(`trending/all/day?api_key=${APIkey}`);
    return response.data;
  }
);
export const fetchAsyncMoviesOrShowsDetail = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShowsDetail",
  async (id) => {
    const response = await tmdbAPI.get(
      `movie/${id}?api_key=${APIkey}&language=en-US`
    );

    return response;
  }
);
const initialState = {
  trending: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncTrending.pending]: () => {
      console.log("Pending");
    },

    [fetchAsyncTrending.fulfilled]: (state, { payload }) => {
      console.log("Fetched succesfully");
      return { ...state, trending: payload };
    },
    [fetchAsyncMoviesOrShowsDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched succesfully");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getTrending = (state) => state.movies.trending;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
