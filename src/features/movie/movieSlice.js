import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend : null,
    originals : null,
    newDisney : null,
    trending : null,
};

const movieSlice = createSlice({
    name : 'movie',
    initialState,
    reducers: {
        setMovies: (state,action) => {
            state.recommend = action.payload.recommend;
            state.originals = action.payload.originals;
            state.newDisney = action.payload.newDisney;
            state.trending = action.payload.trending;

        },
    },
});


export const { setMovies } = movieSlice.actions;

export const SelectRecommend = state => state.movie.recommend;
export const SelectOrignal = state => state.movie.originals;
export const SelectnewDisney = state => state.movie.newDisney;
export const Selecttrending = state => state.movie.trending;

export default movieSlice.reducer;

