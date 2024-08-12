//TODO: Please consider importing only reducers from Slice files by correct namings. Ex: moviesReducer, starredReducer, watchLaterReducer

import { configureStore } from "@reduxjs/toolkit"
import moviesSlice from './moviesSlice'
import starredSlice from './starredSlice'
import watchLaterSlice from './watchLaterSlice'

const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        starred: starredSlice.reducer,
        watchLater: watchLaterSlice.reducer
    },
})

export default store
