import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movieStore: {}
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movieStore = action.payload
        }
    }
})

export const { addMovies } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movieStore
export default movieSlice.reducer