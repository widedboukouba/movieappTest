import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const getAllMovies = createAsyncThunk("movie/getallmovies", async () => {
  const response = await axios.get("http://localhost:1337/api/movies");

  return response.data;
});

export const addMovie = createAsyncThunk("movie/addmovie", async (movie) => {
  const response = await axios.post("http://localhost:1337/api/movies", movie);
  console.log(response);
  return response.data;
});

const initialState = {
  status: "",
  movies: [],
  error: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllMovies.pending, (state, action) => {
      // Add user to the state array
      state.status = "pending";
    });
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movies = action?.payload?.data;
      state.status = "fulfilled";
    });
    builder.addCase(getAllMovies.rejected, (state, action) => {
      state.error = "malgitech";
      state.status = "rejected";
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = movieSlice.actions;

export default movieSlice.reducer;
