import { AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit';
import starshipReducer from '../features/starshipSlice.ts'; // Assurez-vous d'ajuster le chemin d'accès
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        starship: starshipReducer,
    },
    devTools: true // TODO process.env.NODE_ENV !== 'production', // Activer Redux DevTools uniquement en développement
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export default store;
