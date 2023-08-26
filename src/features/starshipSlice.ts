import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Starship } from '../shared/models/starship';

interface Page<T> {
    content: T[];
    pageable: {
        sort: {
            sorted: boolean;
            unsorted: boolean;
        };
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        unpaged: boolean;
    };
    totalPages: number;
    totalElements: number;
    last: boolean;
    first: boolean;
}

const defaultPage: Page<Starship> = {
    content: [],
    pageable: {
        sort: {
            sorted: false,
            unsorted: true,
        },
        offset: 0,
        pageNumber: 0,
        pageSize: 0,
        paged: false,
        unpaged: true,
    },
    totalPages: 0,
    totalElements: 0,
    last: false,
    first: false
};
export interface StarshipState {
    starshipsPage: Page<Starship>;
    loading: boolean;
    error: string | null;
}

const initialState: StarshipState = {
    starshipsPage: defaultPage,
    loading: false,
    error: null,
};

const starshipSlice = createSlice({
    name: 'starships',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStarshipsAsyncThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchStarshipsAsyncThunk.fulfilled, (state, action) => {
            state.starshipsPage = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchStarshipsAsyncThunk.rejected, (state) => {
            state.loading = false;
        });
    }
});

export default starshipSlice.reducer;

export const fetchStarshipsAsyncThunk = createAsyncThunk('fetch/starships', async (): Promise<Page<Starship>> => {
    const response = await fetch("http://localhost:9103/api/v1/products/starship");
    return await response.json();
})