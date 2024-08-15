import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk('fetch-movies', async ({ endpoint, page }, { }) => {
    const response = await fetch(`${endpoint}&page=${page}`);
    const data = await response.json();
    return { movies: data, page };
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: {
            results: [],
            total_pages: 0,
        },
        fetchStatus: '',
        currentPage: 1,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.fulfilled, (state, action) => {
                // Append new movies to the existing list if page is greater than 1
                if (action.payload.page > 1) {
                    state.movies.results = [...state.movies.results, ...action.payload.movies.results];
                } else {
                    state.movies.results = action.payload.movies.results;
                }
                state.fetchStatus = 'success';
                state.currentPage = action.payload.page;
            })
            .addCase(fetchMovies.pending, (state) => {
                state.fetchStatus = 'loading';
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.fetchStatus = 'error';
            });
    }
});

export default moviesSlice;
