import { createAsyncThunk, createSlice, PayloadAction, ThunkDispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { Starship } from '../models/starship';
import { AppDispatch, AppThunk } from '../config/store';


export interface StarshipState {
    starships: Starship[];
    loading: boolean;
    error: string | null;
}

const initialState: StarshipState = {
    starships: [],
    loading: false,
    error: null,
};

const starshipSlice = createSlice({
    name: 'starships',
    initialState,
    reducers: {
        fetchStarshipsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchStarshipsSuccess(state, action: PayloadAction<Starship[]>) {
            state.loading = false;
            state.starships = action.payload;
        },
        fetchStarshipsFailure(state, action: PayloadAction<string | null>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchStarshipsStart, fetchStarshipsSuccess, fetchStarshipsFailure } = starshipSlice.actions;

export default starshipSlice.reducer;

// Thunk for fetching data
export const fetchStarships = (): AppThunk => async (dispatch) => {
    dispatch(fetchStarshipsStart());
    axios.get<Starship[]>('http://localhost:9103/api/v1/products/starship')
        .then(response => {
            dispatch(fetchStarshipsSuccess(response.data));
        })
        .catch((error) => {
            dispatch(fetchStarshipsFailure(error.message));
        });
};
