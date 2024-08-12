//TODO: Please check moviesSlice.js comments and apply here too
//TODO: Please consider using filter instead of splice to avoid direct mutation of the array

import { createSlice } from "@reduxjs/toolkit"

const watchLaterSlice = createSlice({
    name: 'watch-later',
    initialState: {
        watchLaterMovies: []
    },
    reducers: {
        addToWatchLater: (state, action) => {
            state.watchLaterMovies = [action.payload, ...state.watchLaterMovies]
        },
        removeFromWatchLater: (state, action) => {
            const indexOfId = state.watchLaterMovies.findIndex(key => key.id === action.payload.id)
            state.watchLaterMovies.splice(indexOfId, 1)
        },
        remveAllWatchLater: (state) => {
            state.watchLaterMovies = []
        },
    },
})

export default watchLaterSlice
